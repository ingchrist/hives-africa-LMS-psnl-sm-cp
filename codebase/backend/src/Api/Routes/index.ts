import { Router } from "express";
import { ROUTES } from "../../Configs";
import authRoute from "./auth.route";
import courseRoute from "./course.route";

const router = Router();

router.use(ROUTES.auth, authRoute);
router.use(ROUTES.course, courseRoute);

export default router;