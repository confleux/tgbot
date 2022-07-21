import mongose from "mongoose";
import config from "config";

export default async function (): Promise<void> {
  try {
    const dbUri: string = config.get("dbUri");
    await mongose.connect(dbUri);
    console.log("DB connected");
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
