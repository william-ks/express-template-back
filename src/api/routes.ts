import { Router } from "express";
import { userRouter } from "./useCases/User/user.routes";

const router = Router();

router.use(userRouter);

export { router };
