import { sign, verify, JwtPayload } from "jsonwebtoken";

export const generateAccessToken = (payload: object): string => {
  return sign(payload, process.env.JWT_ACCESS_TOKEN as string, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
  });
};

export const generateRefreshToken = (payload: object): string => {
  return sign(payload, process.env.JWT_REFRESH_TOKEN as string , {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
  });
};
export const verifyRefreshToken = (
  refreshToken: string
): string | JwtPayload => {
  return verify(refreshToken, process.env.JWT_REFRESH_TOKEN as string);
};
