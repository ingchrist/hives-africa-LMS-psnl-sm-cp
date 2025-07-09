import { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: Schema.Types.ObjectId;
  title: string;
  price: number;
  imageUrl: string[];
  Bookmark: Schema.Types.ObjectId[];
  categories: string[];
  description: string;
  preferences: string[];
  requirements: string[];

}

export interface PaginatedCourseResponse {
  data: ICourse[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
