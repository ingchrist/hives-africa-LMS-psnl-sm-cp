import { Schema, model } from "mongoose";
import { ICourse } from "../Interfaces";

const CourseSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    categories: [
      {
        type: String,
        require: true,
      },
    ],
    image_url: [
      {
        type: String,
        require: true,
      },
    ],
    description: {
      type: String,
      require: true,
    },
    requirements: [
      {
        type: String,
        require: false,
      },
    ],
    price: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    bookmark: [
      {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Export the model
export const Course = model<ICourse>("Course", CourseSchema);
