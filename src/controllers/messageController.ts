import { Request, Response } from "express";

import { Message } from "../model";
import cache from "../cache/cache";
import { Logger } from "../utils";
import { MessageControllerException } from "../errors";

class MessageController {
  public publishMessage(req: Request, res: Response): Response {
    if (req.body) {
      const sendedMessage = Message.newMessage({ ...req.body });

      cache.set("last", Message.toString(sendedMessage));

      return res.send("OK");
    } else {
      Logger.error("Invalid request body");
      throw new MessageControllerException("Invalid request body");
    }
  }
}

export default new MessageController();
