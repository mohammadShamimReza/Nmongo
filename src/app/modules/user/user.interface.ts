import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emergencyContact: string;
  presentAddress: string;
  permanentAddress: string;
}



// Methode
export interface IuserMethods {
  fullName() : string;
}
// static
export interface UserModel extends Model<IUser, {}, IuserMethods> {
  myStaticMethod(): Promise<HydratedDocument<IUser, IuserMethods>>;
}