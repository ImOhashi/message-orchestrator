import { Request, Response } from "express";

import { Message } from "../model";
import cache from "../cache/cache";

class MessageController {
  public reciveMessage(req: Request, res: Response): Response {
    if (req.body) {
      const sendedMessage = Message.newMessage({ ...req.body });

      cache.set("last", Message.toString(sendedMessage));

      return res.send("OK");
    } else {
      
    }
  }
}

export default new MessageController();
