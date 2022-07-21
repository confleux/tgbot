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

    console.log("Telegram bot has been launched");

    return bot;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw e;
    }
  }

  //  bot.command("action", (ctx) => {
  //    ctx.reply("you have done an action");
  //    console.log(ctx.chat.id);
  //  });

  //  bot.on("text", (ctx) => {
  //    console.log(ctx.message);
  //  });
}
