import express from 'express'
import { createUser, getUsers, getUsersById } from './user.controlar';

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersById)
router.post("/create-user", createUser);

export default router;