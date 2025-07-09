import { setData } from "../Types";
import { redisClient } from "../../Configs";

abstract class CacheAbstract {
  abstract getData<T>(key: string): Promise<T | null>;
  abstract setData(payload: setData): Promise<boolean>;
  abstract deleteData(key: string): Promise<boolean>;
  abstract clearCache(): Promise<boolean>;
}

export class CacheService extends CacheAbstract {
  async getData<T>(key: string): Promise<T | null> {
    try {
      const value = await redisClient.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Redis Get Error:", error);
      return null;
    }
  }

  async setData(payload: setData): Promise<boolean> {
    try {
      const redis_expiration = process.env.REDIS_EXPIRATION as string | number;
      await redisClient.setex(
        payload.key,
        redis_expiration,
        JSON.stringify(payload.value)
      );
      return true;
    } catch (error) {
      console.error("Redis Set Error:", error);
      return false;
    }
  }

  async deleteData(key: string): Promise<boolean> {
    try {
      await redisClient.del(key);
      return true;
    } catch (error) {
      console.error("Redis Delete Error:", error);
      return false;
    }
  }

  async clearCache(): Promise<boolean> {
    try {
      await redisClient.flushall();
      return true;
    } catch (error) {
      console.error("Redis Clear Error:", error);
      return false;
    }
  }
}
