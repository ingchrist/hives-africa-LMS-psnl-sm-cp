import { Router, Application } from "express";
import { getCourses } from "../Controllers";

const routes = Router();

routes.get("/", getCourses as Application);

export default routes;
