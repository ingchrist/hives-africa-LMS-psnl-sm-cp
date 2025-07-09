import { Schema, model } from "mongoose";
import { IOtp } from "../Interfaces";

const OtpSchema = new Schema({
  type: {
    type: String,
    required: false,
  },
  otp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, expires: "2m", default: Date.now },
});

// Export the model
export const Otp = model<IOtp>("Otp", OtpSchema);
