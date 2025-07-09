import mongoose from "mongoose";
import { MONGO_URI } from "../config";

const mongoConfig = {
  mongoURI: MONGO_URI as string,
  mongoSetup: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export {
  mongoose,
  mongoConfig,
};