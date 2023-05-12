import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";


const app: Application = express();

//useing cors
app.use(cors())


app.get("/", (req:Request, res:Response, next: NextFunction) => {
  res.send("Hello World!");
});

export default app;