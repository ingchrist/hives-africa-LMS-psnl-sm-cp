import { Schema } from "mongoose";
export type UserPayload = {
  name: string;
  email: string;
  courses: string[];
  password: string;
  Bookmark: string[];
  isVerified: boolean;
  preferences: string[];
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type forgotPasswordPayload = {
  email: string;
};

export type resetPasswordPayload = {
  otp: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type loginServicePayload = {
  id: Schema.Types.ObjectId;
  isVerified: boolean;
  password: string;
  request_password: string;
};
