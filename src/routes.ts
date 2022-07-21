import { Express, Request, Response } from "express";
import { Telegraf, Context } from "telegraf";
import { findUsers, findUser } from "./service/user.service";
import { IUser } from "./models/user.model";
import { get } from "lodash";

export default function (app: Express, tgbot: Telegraf<Context>): void {
  app.post("/message", async (req: Request, res: Response) => {
    const users = await findUsers({});
    users.forEach((user: IUser) => {
      tgbot.telegram.sendMessage(user.tgNumberId, req.body.msg)
        .then(() => {
          return res.sendStatus(200);
        })
        .catch((e) => {
          console.error(e);
          return res.sendStatus(500);
        });
    });
  });

  app.post("/message/:tgAtId", async (req: Request, res: Response) => {
    const tgAtId = get(req, "params.tgAtId");
    const user = await findUser({tgAtId: tgAtId});
    if (!user) {
      return res.sendStatus(404);
    }
    tgbot.telegram.sendMessage(user.tgNumberId, req.body.msg)
      .then(() => {
        return res.sendStatus(200);
      })
      .catch((e) => {
        console.error(e);
        return res.sendStatus(500);
      });
  });
}
