import { app, mongoose, mongoConfig,redisClient } from "./src";


const PORT = process.env.PORT as string | number;
const start = () => {
  // Test the connections
  // redisClient.on("connect", () => {
  //   console.log("Connected to Redis");
  // });

  // redisClient.on("error", (err) => {
  //   console.error("Redis error:", err);
  // });

  mongoose.set("strictQuery", true);

  mongoose
    .connect(mongoConfig.mongoURI as string)
    .then(() => {
      console.log("Successfully connected to database.", mongoConfig.mongoURI);
    })
    .catch((err) => {
      console.log("There was an error connecting to database " + err);
    });

  app.listen(PORT, () => {
    console.log("Process is listening to PORT: ", PORT);
  });
};

start();