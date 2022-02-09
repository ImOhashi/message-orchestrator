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

  async get(key: string): Promise<any> {
    const value: string = await this.redis.get(key);

    return value ? JSON.parse(value) : null;
  }

  set(key: string, value: any): Promise<"OK"> {
    return this.redis.set(key, value);
  }
}

export default new CacheImplementation();
