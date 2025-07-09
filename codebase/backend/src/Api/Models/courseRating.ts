import { Schema, model } from "mongoose";
import { ICourseRating } from "../Interfaces";

const CourseRatingSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    courseId: { type: Schema.Types.ObjectId, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: false },
  },
  { timestamps: true }
);


export const CourseRating = model<ICourseRating>("CourseRating",CourseRatingSchema);