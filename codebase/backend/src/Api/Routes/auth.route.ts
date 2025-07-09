import { Router, Application } from "express";
import { ROUTES } from "../../Configs";
import { signup, verify_otp,login, forgot_password, reset_password, generateNewAccessToken, logout} from "../Controllers";

const routes = Router();

routes.post(ROUTES.signup, signup as Application);
routes.post(ROUTES.verify_otp, verify_otp as Application);
routes.post(ROUTES.login, login as Application);
routes.post(ROUTES.forgot_password, forgot_password as Application);
routes.post(ROUTES.reset_password, reset_password as Application);
routes.post(ROUTES.request_access_token, generateNewAccessToken as Application);
routes.post(ROUTES.logout, logout as Application);


// // google authentication route

// router.post("/google_login",googleController.googleLogin);
// router.post("/google_signup",googleController.googleSignUp);

export default routes;
