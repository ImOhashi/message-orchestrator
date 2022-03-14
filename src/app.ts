import express from "express";
import { config } from "dotenv";

import router from "./routes";
import { morganMiddleware } from "./utils";
import kafka from "./broker/producer";

class App {
  public app: express.Application = express();

  constructor() {
    if (process.env.NODE_ENV === "development") config();

    kafka.connect();

    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(morganMiddleware);
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        parameterLimit: 10000,
        limit: "50mb",
        extended: false,
      })
    );
    this.app.use(router);
  }
}

export default new App().app;
