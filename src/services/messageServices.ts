import { Message } from "../model";
import { IMessageServices } from "../interfaces";
import cache from "../cache/cache";

class MessageServices implements IMessageServices {
  public async getLastMessage(): Promise<string> {
      const lastMessage = await cache.get("last");
      return lastMessage;
  }
}

export default new MessageServices();
