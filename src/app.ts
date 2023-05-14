import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// Application routes
import userRoutes from './app/modules/user/user.route'

//useing cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;


/*
  interface => interface.ts
  Schema, Model => model.ts


  route

  route function  => controller.ts

  Database Query Function => service.ts

*/