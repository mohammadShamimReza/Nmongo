import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

//useing cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.send("Hello World!");

  // instrting a test data into mongodb
  /*
        Step 1: Interface
        Step 2: Schema
        Step 3: Model
        step 4: Database Query
     */

  // creating a interface

  interface IUser {
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

  // creating schema using interfaces
  const userSchema = new Schema<IUser>({
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
  // create model
  const User = model<IUser>("user", userSchema);



  async function run() {
    const user = new User({
      id: "53533",
      role: "student",
      password: "13543245",
      name: {
        firstName: "mina33n",
        middleName: "rezaa",
        lastName: "mohammad",
      },
      dateOfBirth: "13 april 1999",
      gender: "female",
      email: "mohammadshamimreza23393@gmail.com",
      contactNo: "01405723393",
      emergencyContact: "1234234",
      presentAddress: "2342435",
      permanentAddress: "2345345",
    });
   
      await user.save();
       console.log(user, "this is a model");
  
  }
  run();
});

export default app;
