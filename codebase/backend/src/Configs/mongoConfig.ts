import mongoose from "mongoose";

const mongoConfig = {
  mongoURI: process.env.MONGODB_URL as string,
  mongoSetup: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export {
  mongoose,
  mongoConfig,
};