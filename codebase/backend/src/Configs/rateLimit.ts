import rateLimit from "express-rate-limit";

export const setRateLimit = (max_requests: number, time?: number) => {
  
    return rateLimit({
        windowMs: time ?? Number(process.env.RATE_LIMIT_TIME),
        validate: {xForwardedForHeader: false},
        max: max_requests, // limit each IP to 100 requests per windowMs
        message: "Too many requests from this IP, please try again later.",
    });
};
