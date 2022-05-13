import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { logger } from "cyber-logger";

import { Message } from "../model";
import cache from "../cache/cache";
import messageService from "../services/messageServices";
import { MessageControllerException } from "../errors";

class MessageController {
  public publishMessage(req: Request, res: Response): Response {
    if (req.body) {
      const sendedMessage = Message.newMessage({ ...req.body });

      cache.set("last", Message.toString(sendedMessage));

      return res.status(StatusCodes.CREATED).send();
    } else {
      logger.error("Invalid request body");
      throw new MessageControllerException("Invalid request body");
    }
  }

  public async getLastMessage(req: Request, res: Response): Promise<Response> {
    try {
      const last = await messageService.getLastMessage();

      return res.status(StatusCodes.OK).json(last);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new MessageController();
