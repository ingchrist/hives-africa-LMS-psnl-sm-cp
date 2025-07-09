import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../Utils";
import { jwtCachePayload,tokenResponseType,loginServicePayload } from "../Types";




abstract class AuthAbstract {
  abstract login(payload: loginServicePayload): Promise<tokenResponseType | boolean>;
  abstract generateAuthToken(payload: jwtCachePayload): tokenResponseType;
}

export class AuthService extends AuthAbstract {
  async login(payload: loginServicePayload): Promise<boolean | tokenResponseType> {
    // compare password
    const isMatch = await bcrypt.compare(
      payload.request_password,
      payload.password
    );
    if (!isMatch) {
      console.log("password mismatch");
      return false;
    }

    // create jwt access token and refresh token
    const response: jwtCachePayload = {
      id: payload.id,
      isVerified: payload.isVerified,
    };

    return this.generateAuthToken(response);
  }

  generateAuthToken(payload: jwtCachePayload): tokenResponseType {
    return {
      accessToken: generateAccessToken(payload),
      refreshToken: generateRefreshToken(payload),
    };
  }

}
