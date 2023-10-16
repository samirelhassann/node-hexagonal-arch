import { FastifyInstance } from "fastify";

import { InMemoryUserRepository } from "@/adapter/driven/infra/repositories/inMemoryUserRepository";
import { UserUseCase } from "@/core/application/useCases/UserUseCase";

import { UserController } from "./userController";

const userRepository = new InMemoryUserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

export async function UserRoutes(app: FastifyInstance) {
  app.get("/list", userController.getUsers.bind(userController));
}
