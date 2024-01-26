import { Request, Response } from "express";
import { CreateUserService } from "./createUser.service";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    await this.createUserService.execute({ email, password });
  }
}
