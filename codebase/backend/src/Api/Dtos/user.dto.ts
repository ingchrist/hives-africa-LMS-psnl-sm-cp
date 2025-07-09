import { Joi } from "./schemaValidator"

export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    courses: Joi.array().items(Joi.string().required()),
    password: Joi.string().required(),
    bookmark: Joi.array().items(Joi.string().required()),
    isverified: Joi.boolean().optional(),
    preferences: Joi.array().items(Joi.string().required()),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

export const otpSchema = Joi.object({
    otp: Joi.string().required(),
    type: Joi.string().optional(),
    email: Joi.string().email().required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPasswordSchema = Joi.object({
  otp: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export const generateAccessTokenSchema = Joi.object({
  refreshToken: Joi.string().required(),
});