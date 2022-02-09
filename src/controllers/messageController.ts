import { Request, Response } from "express";

import { Message } from "../model";
import cache from "../cache/cache";

class MessageController {
  reciveMessage(req: Request, res: Response) {
    if (req.body) {
      const sendedMessage = Message.newMessage({ ...req.body });

      cache.set("last", sendedMessage)
    }
  }
}
