import redis, { Redis } from "ioredis";
import { Logger } from "../utils";

class CacheImplementation {
  private redis: Redis;

  constructor() {
    this.redis = new redis({
      host: process.env.REDIS_HOST || "localhost",
      port: Number.parseInt(process.env.REDIS_PORT) || 6379,
      keyPrefix: "orchestrator:",
    });
  }

  async get(key: string): Promise<any> {
    const value: string = await this.redis.get(key);
    const parsedValue = value ? JSON.parse(value) : null;

    Logger.info(`get a cache value: ${parsedValue}`);

    return parsedValue;
  }

  set(key: string, value: any): Promise<"OK"> {
    Logger.info(`set cache value: ${value}`);
    return this.redis.set(key, value);
  }
}

export default new CacheImplementation();
