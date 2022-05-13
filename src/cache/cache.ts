import redis, { Redis } from "ioredis";
import { logger } from "cyber-logger";

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

    if (value) {
      logger.info(`get a cache value: ${value}`);
      return value;
    }

    logger.info(`Don't have messages`);
    return null;
  }

  set(key: string, value: any): Promise<"OK"> {
    logger.info(`set cache value: ${value}`);
    return this.redis.set(key, value);
  }
}

export default new CacheImplementation();
