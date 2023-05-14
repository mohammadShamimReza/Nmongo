import { NextFunction, Request, Response, request } from "express";
import { createUserToDb, getUserByIdFormDB, getUsersFromDb } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    const user = await createUserToDb(data);
    res.status(200).json({
        status: "success",
        data: user
    })
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  console.log('getUsers')
    const user = await getUsersFromDb();
    res.status(200).json({
        status: 'success',
        data: user
    })
}

export const getUsersById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id.toString();
  console.log(userId);
  const user = await getUserByIdFormDB(userId);
  
  res.status(200).json({
    status: "success",
    data: user,
  });
};

// pattern


// Route -> controller -> service