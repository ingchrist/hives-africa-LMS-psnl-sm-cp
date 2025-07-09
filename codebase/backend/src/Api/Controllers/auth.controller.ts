import { IUser } from "../Interfaces";
import { generateOtp } from "../Helpers";
import { sendEmail } from "../../Configs";
import { Request, Response } from "express";
import { otp_verification_mail } from "../../static";
import { UserService, CacheService, AuthService } from "../Services";
import {
  validator,
  otpSchema,
  userSchema,
  loginSchema,
  resetPasswordSchema,
  forgotPasswordSchema,
  generateAccessTokenSchema,
} from "../Dtos";
import {
  OtpEnum,
  TokenEnum,
  SendResponse,
  ResponseType,
  verifyRefreshToken,
  generateAccessToken,
} from "../Utils";
import {
  otpType,
  UserPayload,
  LoginPayload,
  logoutPayload,
  verifyUserOtpType,
  refreshTokenPayload,
  resetPasswordPayload,
  forgotPasswordPayload,
} from "../Types";
import { JwtPayload } from "jsonwebtoken";

const userService = new UserService();
const cacheService = new CacheService();
const authService = new AuthService();

// set response message
let sendResponse: SendResponse<IUser | unknown>;

// signup user
export const signup = async (req: Request, res: Response) => {
  try {
    // Perform necessary validations
    const validated = await validator<UserPayload>(userSchema)(await req.body);
    if (validated.errors || !validated.value) {
      const errorResponse = new SendResponse(
        SendResponse.VALIDATION_ERROR,
        ResponseType.ERROR,
        400,
        validated.errors
      );
      return res.status(400).json(errorResponse.toJSon());
    }

    // Check if user already exists in the database
    const find_user = await userService.findUser({
      email: validated.value.email,
    });
    if (find_user) {
      sendResponse = new SendResponse(
        SendResponse.EXISTING_USER,
        ResponseType.ERROR,
        400,
        []
      );
      return res.status(200).json(sendResponse.toJSon());
    }
    // Create a new user in the database
    const user = await userService.createUser(await req.body);

    // cache otp
    const otp_payload: otpType = {
      id: user._id,
      type: OtpEnum.SIGNUP_OTP_VERIFICATION,
      otp: generateOtp(),
    };
    await cacheService.setData({
      key: `${OtpEnum.SIGNUP_OTP_VERIFICATION}:${user._id}`,
      value: otp_payload,
    });

    // send mail otp
    sendEmail(
      user.email,
      OtpEnum.SIGNUP_OTP_VERIFICATION,
      otp_verification_mail(otp_payload.otp)
    );

    // Return a success response with user details
    sendResponse = new SendResponse(
      SendResponse.SERVICE_REQUEST_SUCCESS,
      ResponseType.SUCCESS,
      200,
      user
    );
    return res.status(200).json(sendResponse.toJSon());
  } catch (error) {
    sendResponse = new SendResponse(
      SendResponse.SERVER_ERROR,
      ResponseType.ERROR,
      500,
      error
    );
    return res.status(400).json(sendResponse.toJSon());
  }
};

// validate otp and update user isVerified
export const verify_otp = async (req: Request, res: Response) => {
  try {
    // Perform necessary validations
    const validated = await validator<verifyUserOtpType>(otpSchema)(
      await req.body
    );
    if (validated.errors || !validated.value) {
      const errorResponse = new SendResponse(
        SendResponse.VALIDATION_ERROR,
        ResponseType.ERROR,
        400,
        validated.errors
      );
      return res.status(400).json(errorResponse.toJSon());
    }

    // find user by email
    const find_user = await userService.findUser({
      email: validated.value.email,
    });
    if (!find_user) {
      sendResponse = new SendResponse(
        SendResponse.NOT_FOUND_ERROR,
        ResponseType.ERROR,
        400,
        []
      );
      return res.status(400).json(sendResponse.toJSon());
    }

    // check if otp exists or matches request data
    const fetch_otp = await cacheService.getData<verifyUserOtpType>(
      `${OtpEnum.SIGNUP_OTP_VERIFICATION}:${find_user?._id}`
    );
    if (!fetch_otp || fetch_otp.otp !== validated.value.otp) {
      sendResponse = new SendResponse(
        SendResponse.OTP_MISMATCH_ERROR,
        ResponseType.ERROR,
        400,
        []
      );
      return res.status(400).json(sendResponse.toJSon());
    }

    // update user's isVerified field
    await userService.updateUser({ _id: find_user._id }, { isVerified: true });

    // create jwt access token and refresh token
    const payload = {
      id: find_user._id,
      isVerified: true,
    };
    const auth_tokens = authService.generateAuthToken(payload);

    // save the refresh token in redis cache
    await cacheService.setData({
      key: `${TokenEnum.REFRESH_TOKEN}:${find_user._id}`,
      value: { token: auth_tokens.refreshToken },
    });
    //TODO delete the otp from redis cache

    // return the tokens to the
    sendResponse = new SendResponse(
      SendResponse.SERVICE_REQUEST_SUCCESS,
      ResponseType.SUCCESS,
      200,
      auth_tokens
    );
    return res.status(200).json(sendResponse.toJSon());
  } catch (error) {
    sendResponse = new SendResponse(
      SendResponse.SERVER_ERROR,
      ResponseType.ERROR,
      500,
      error
    );
    return res.status(500).json(sendResponse.toJSon());
  }
};

// login
export const login = async (req: Request, res: Response) => {
  try {
    // validate incoming request
    const validated = await validator<LoginPayload>(loginSchema)(
      await req.body
    );
    if (validated.errors || !validated.value) {
      const errorResponse = new SendResponse(
        SendResponse.VALIDATION_ERROR,
        ResponseType.ERROR,
        400,
        validated.errors
      );
      return res.status(400).json(errorResponse.toJSon());
    }

    // find user by email
    const find_user = await userService.findUser({
      email: validated.value.email,
    });
    if (!find_user) {
      sendResponse = new SendResponse(
        SendResponse.INVALID_LOGIN,
        ResponseType.ERROR,
        400,
        []
      );
      return res.status(400).json(sendResponse.toJSon());
    }

    // login user && generate token
    const login_payload = {
      id: find_user._id,
      password: find_user.password,
      isVerified: find_user.isVerified,
      request_password: validated.value.password,
    };
    const login_user = await authService.login(login_payload);
    if (!login_user || typeof login_user !== "object") {
      sendResponse = new SendResponse(
        SendResponse.INVALID_LOGIN,
        ResponseType.ERROR,
        400,
        []
      );
      return res.status(400).json(sendResponse.toJSon());
    }

    // save the refresh token in redis cache
    await cacheService.setData({
      key: `${TokenEnum.REFRESH_TOKEN}:${find_user._id}`,
      value: { token: login_user.refreshToken },
    });

    // return the tokens to the
    sendResponse = new SendResponse(
      SendResponse.SERVICE_REQUEST_SUCCESS,
      ResponseType.SUCCESS,
      200,
      login_user
    );
    return res.status(200).json(sendResponse.toJSon());
  } catch (error) {
    sendResponse = new SendResponse(
      SendResponse.SERVER_ERROR,
      ResponseType.ERROR,
      500,
      error
    );
    return res.status(500).json(sendResponse.toJSon());
  }
};

// forget password
export const forgot_password = async (req: Request, res: Response) => {
  try {
    // validate incoming request
    const validated = await validator<forgotPasswordPayload>(
      forgotPasswordSchema
    )(await req.body);
    if (validated.errors || !validated.value) {
      const errorResponse = new SendResponse(
        SendResponse.VALIDATION_ERROR,
        ResponseType.ERROR,
        400,
        validated.errors
      );
      return res.status(400).json(errorResponse.toJSon());
    }

    // find user by email
    const find_user = await userService.findUser({
      email: validated.value.email,
    });
    if (!find_user) {
      sendResponse = new SendResponse(
        SendResponse.NOT_FOUND_ERROR,
        ResponseType.ERROR,
        400,
        []
      );
      return res.status(400).json(sendResponse.toJSon());
    }

    // cache otp
    const otp_payload: otpType = {
      id: find_user._id,
      type: OtpEnum.FORGOT_PASSWORD_OTP_VERIFICATION,
      otp: generateOtp(),
    };
    await cacheService.setData({
      key: `${OtpEnum.FORGOT_PASSWORD_OTP_VERIFICATION}:${find_user._id}`,
      value: otp_payload,
    });

    // send mail otp
    sendEmail(
      find_user.email,
      OtpEnum.FORGOT_PASSWORD_OTP_VERIFICATION,
      otp_verification_mail(otp_payload.otp)
    );
    // return successful
    sendResponse = new SendResponse(
      SendResponse.SERVICE_REQUEST_SUCCESS,
      ResponseType.SUCCESS,
      200,
      []
    );
    return res.status(200).json(sendResponse.toJSon());
  } catch (error) {
    sendResponse = new SendResponse(
      SendResponse.SERVER_ERROR,
      ResponseType.ERROR,
      500,
      error
    );
    return res.status(500).json(sendResponse.toJSon());
  }
};

// reset password
export const reset_password = async (req: Request, res: Response) => {
  try {
    // validate incoming request
    const validated = await validator<resetPasswordPayload>(
      resetPasswordSchema
    )(await req.body);
    if (validated.errors || !validated.value) {
      const errorResponse = new SendResponse(
        SendResponse.VALIDATION_ERROR,
        ResponseType.ERROR,
        400,
        validated.errors
      );
      return res.status(400).json(errorResponse.toJSon());
    }

    // find user by email
    const find_user = await userService.findUser({
      email: validated.value.email,
    });
    if (!find_user) {
      sendResponse = new SendResponse(
        SendResponse.NOT_FOUND_ERROR,
        ResponseType.ERROR,
        400,
        []
      );
      return res.status(400).json(sendResponse.toJSon());
    }

    // check if otp exists or matches request data
    const fetch_otp = await cacheService.getData<otpType>(
      `${OtpEnum.FORGOT_PASSWORD_OTP_VERIFICATION}:${find_user?._id}`
    );
    if (!fetch_otp || fetch_otp.otp !== validated.value.otp) {
      sendResponse = new SendResponse(
        SendResponse.OTP_MISMATCH_ERROR,
        ResponseType.ERROR,
        400,
        []
      );
      return res.status(400).json(sendResponse.toJSon());
    }

    // update user's isVerified field
    await userService.updateUser(
      { _id: find_user._id },
      { password: validated.value.password }
    );

    // return successful
    sendResponse = new SendResponse(
      SendResponse.SERVICE_REQUEST_SUCCESS,
      ResponseType.SUCCESS,
      200,
      []
    );
    return res.status(200).json(sendResponse.toJSon());
  } catch (error) {
    sendResponse = new SendResponse(
      SendResponse.SERVER_ERROR,
      ResponseType.ERROR,
      500,
      error
    );
    return res.status(500).json(sendResponse.toJSon());
  }
};

export const generateNewAccessToken = async (req: Request, res: Response) => {
  // validate incoming request
  const validated = await validator<refreshTokenPayload>(
    generateAccessTokenSchema
  )(await req.body);
  if (validated.errors || !validated.value) {
    const errorResponse = new SendResponse(
      SendResponse.VALIDATION_ERROR,
      ResponseType.ERROR,
      400,
      validated.errors
    );
    return res.status(400).json(errorResponse.toJSon());
  }

  // verify token
  const verify_token = verifyRefreshToken(
    validated.value.refreshToken
  ) as JwtPayload;
  if (!verify_token) {
    const errorResponse = new SendResponse(
      SendResponse.INVALID_TOKEN,
      ResponseType.ERROR,
      400,
      []
    );
    return res.status(401).json(errorResponse.toJSon());
  }

  // check cache for token
  const fetch_token = await cacheService.getData<refreshTokenPayload>(
    `${TokenEnum.REFRESH_TOKEN}:${verify_token.id}`
  );
  if (!fetch_token) {
    sendResponse = new SendResponse(
      SendResponse.INVALID_TOKEN,
      ResponseType.ERROR,
      400,
      []
    );
    return res.status(400).json(sendResponse.toJSon());
  }

  // return successful response
  sendResponse = new SendResponse(
    SendResponse.SERVICE_REQUEST_SUCCESS,
    ResponseType.SUCCESS,
    200,
    {
      access_token: generateAccessToken({
        id: verify_token.id,
        isVerified: verify_token.isVerified,
      }),
    }
  );
  return res.status(200).json(sendResponse.toJSon());
};

export const logout = async (req: Request, res: Response) => {
  // TODO: ADD THIS ROUTE TO AN AUTHENTICATED ROUTE

  // validate incoming request
  const validated = await validator<logoutPayload>(generateAccessTokenSchema)(await req.body);
  // validate incoming request
  if (validated.errors || !validated.value) {
    const errorResponse = new SendResponse(
      SendResponse.VALIDATION_ERROR,
      ResponseType.ERROR,
      400,
      validated.errors
    );
    return res.status(400).json(errorResponse.toJSon());
  }

  // check cache for token
  await cacheService.deleteData(
    `${TokenEnum.REFRESH_TOKEN}:${validated.value.id}`
  );

  sendResponse = new SendResponse(
    SendResponse.SERVICE_REQUEST_SUCCESS,
    ResponseType.SUCCESS,
    200,
    []
  );
  return res.status(400).json(sendResponse.toJSon());
};
