import { Telegraf, Context } from "telegraf";
import config from "config";
import { createUser } from "./service/user.service";

export default async function (): Promise<Telegraf<Context> | void> {
  try {
    const botToken: string = config.get("botToken");

    const bot = new Telegraf(botToken);

    bot.start(async (ctx) => {
      await createUser(
        {
          tgNumberId: ctx?.from.id,
          tgAtId: ctx?.from?.username
        }
      )
        .then(() => {
          ctx.reply("You have successfully started a bot");
        })
        .catch((e) => {
          ctx.reply("There was a problem starting your bot");
          console.error(e);
        });
    });

    await bot.launch();

    bot.command("meow", (ctx) => {
      ctx.reply("Meow-meow");
    });

    bot.command("help", (ctx) => {
      ctx.reply("You will receive here messages");
    });


    bot.on("text", (ctx) => {
      ctx.reply("Meow");
    });

    console.log("Telegram bot has been launched");

    return bot;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw e;
    }
  }

}
