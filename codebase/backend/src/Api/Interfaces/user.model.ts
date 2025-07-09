import { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: Schema.Types.ObjectId;
    name: string;
    email: string;
    courses: Schema.Types.ObjectId[];
    password: string;
    Bookmark: Schema.Types.ObjectId[];
    isVerified: boolean;
    preferences: string[];
    // gender: string;
}

export interface PaginatedUserResponse {
  data: IUser[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}