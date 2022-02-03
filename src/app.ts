import express from "express";

import { config } from "dotenv";

class App {
  public app: express.Application = express();

  constructor() {
    config();

    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        parameterLimit: 10000,
        limit: "50mb",
        extended: false,
      })
    );
  }
}

export default new App().app;
