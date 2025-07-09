import { Document, Schema } from "mongoose";

export interface IOtp extends Document {
  _id: Schema.Types.ObjectId;
  otp: string;
  type?: string;
  email?: string;
}
