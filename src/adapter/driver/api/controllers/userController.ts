import { FastifyReply, FastifyRequest } from "fastify";

import { IUserUseCase } from "@/core/application/useCases/IUserUseCase";

export class UserController {
  constructor(private userUseCase: IUserUseCase) {}

  async getUsers(req: FastifyRequest, res: FastifyReply) {
    const users = await this.userUseCase.getUsers();

    return res.status(200).send({ users });
  }
}
