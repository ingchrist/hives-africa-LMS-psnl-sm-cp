import { Request, Response } from "express";
import { Course } from "../Models";

export const getCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses", error });
    }
};
