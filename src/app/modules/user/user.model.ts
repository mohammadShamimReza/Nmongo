import { HydratedDocument, Model, Schema, model } from "mongoose";
import { IUser, IuserMethods, UserModel } from "./user.interface";

// creating schema using interfaces



const userSchema = new Schema<IUser, UserModel, IuserMethods>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String, required: true },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: { type: String },
  contactNo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

userSchema.static("myStaticMethod", function myStaticMethod(): string {
  // const gen = this.gender;
  return 'women';
});

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// create model

const User = model<IUser, UserModel>("User", userSchema);



export default User