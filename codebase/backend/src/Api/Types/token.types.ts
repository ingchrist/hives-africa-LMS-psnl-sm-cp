
export type otpType = {
  otp: string;
  type?: string;
  id: object;
};

export type verifyUserOtpType = {
  otp: string;
  email: string;
};

export type refreshTokenPayload = {
  refreshToken: string;
};
export type logoutPayload = {
  id: string;
};
export type tokenResponseType = {
  accessToken: string;
  refreshToken: string;
};
