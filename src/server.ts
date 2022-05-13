import { logger } from "cyber-logger";

import app from "./app";

const port: string | number = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server listening on port: ${port}`);
});
