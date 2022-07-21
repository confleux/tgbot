import mongose from "mongoose";

export interface IUser {
  tgNumberId: number,
  tgAtId: string | undefined
}

const UserSchema = new mongose.Schema<IUser>(
  {
    tgNumberId: { type: "Number", required: true, unique: true },
    tgAtId: { type: "String", required: true, unique: true }
  },
  { timestamps: true }
);

const User = mongose.model<IUser>("User", UserSchema);

export default User;
