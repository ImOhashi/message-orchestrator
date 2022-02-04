import redis, { Redis, ValueType } from "ioredis";

class CacheImplementation {
  private redis: Redis;

  constructor() {
    this.redis = new redis({
      host: process.env.REDIS_HOST || "localhost",
      port: Number.parseInt(process.env.REDIS_PORT) || 6379,
      keyPrefix: "orchestrator:",
    });
  }

  async get(key: KeyType): Promise<any> {
    const value: string = await this.redis.get(key);

    return value ? JSON.parse(value) : null;
  }

  set(key: KeyType, value: ValueType, timeExp: string | any): Promise<"OK"> {
      return this.redis.set(key, value, timeExp);
  }
}
