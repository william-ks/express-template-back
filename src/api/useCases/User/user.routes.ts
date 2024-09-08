import { Router } from "express";
import { createUserController } from "./createUser.ts";

const userRouter = Router();

userRouter.post("/user/create", (req, res) => {
	return createUserController.handle(req, res);
});

export { userRouter };
