import { Router } from "express";
import { ROUTES } from "../../Configs";
import authRoute from "./auth.route";

const router = Router();

router.use(ROUTES.auth, authRoute);

export default router;