import app from "./app";
import { Logger } from "./utils";

const port: string | number = process.env.PORT || 3000;

app.listen(port, () => {
  Logger.info(`Server listening on port: ${port}`);
});
