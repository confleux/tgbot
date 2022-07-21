import express from "express";
import config from "config";
import tgbot from "./tgbot";
import connect from "./db/connect";
import routes from "./routes";

const app = express();

const host: string = config.get("host");
const port: number = config.get("port");

app.use(express.json());

app.listen(port, host, async () => {
  try {
    await connect();
    const bot = await tgbot();
    //  @ts-ignore
    routes(app, bot);
    console.log(`App listening at ${host}:${port}`);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`Error: ${e}`);
      process.exit(1);
    }
  }
});
