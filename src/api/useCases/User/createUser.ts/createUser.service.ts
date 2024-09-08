/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./createUser.DTO";

export class CreateUserService {
	constructor(private userRepository: IUserRepository) {}

	async execute(props: ICreateUserDTO) {}
}
