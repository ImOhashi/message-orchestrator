import { Router } from "express";

import message from "../controllers/messageController";

class MessageRouter {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.post("/publish", message.publishMessage)
      .get("/last", message.getLastMessage);
  }
}

export default new MessageRouter().router;
