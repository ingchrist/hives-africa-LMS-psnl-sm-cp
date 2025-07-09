import Redis from "ioredis";

// Create a new Redis client
const redis = new Redis({
  host: process.env.REDIS_HOST, // Redis server host
  port: Number(process.env.REDIS_PORT) as number
  // password: "your_password", // Optional: Redis password if set
});

export const redisClient = redis;

