import { Document, Schema } from "mongoose";

export interface ICourseRating extends Document {
  _id: Schema.Types.ObjectId;
  userId: string;
  rating: string;
  courseId: string;
  comment?: string;
}
