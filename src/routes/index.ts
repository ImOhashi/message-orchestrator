import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

import { IDetails } from "../interfaces";
import messageRouter from "./messageRouter";

class Routes {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router
      .use("/details", (req: Request, res: Response) => {
        const details: IDetails = {
          version: process.env.npm_package_version,
          author: process.env.npm_package_author_name,
          email: process.env.npm_package_author_email,
          repository_url: process.env.npm_package_repository_url,
        };

        return res.status(StatusCodes.OK).json(details);
      })
      .use("/message-orchestrator", messageRouter);
  }
}

export default new Routes().router;
