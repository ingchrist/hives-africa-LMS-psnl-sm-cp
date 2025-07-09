import { Schema } from "mongoose";

export type setData = {
  key: string;
  value: object;
};

export type jwtCachePayload  = {
  id: Schema.Types.ObjectId;
  isVerified: boolean;
}