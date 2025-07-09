import { Schema, model } from "mongoose";

import { IUser } from "../Interfaces";
import { required } from "joi";

// Schema definition
const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    googleId: { type: String, default:null },
    courses: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Course",
      },
    ],
    preferences: [{ type: String, required: false }],
    Bookmark: [
      {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "Course",
      },
    ],
    // gender: {
    //   type: String,
    //   required: true,
    //   enum: ["MALE", "FEMALE"],
    // },
  },
  {
    timestamps: true,
  }
);


// Export the model
export const User = model<IUser>("User", UserSchema);
