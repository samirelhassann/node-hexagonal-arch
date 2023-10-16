/* eslint-disable class-methods-use-this */
import { User } from "@/core/domain/entities/User";
import { UserRepository } from "@/core/domain/repositories/userRepository";

import { IUserUseCase } from "./IUserUseCase";

export class UserUseCase implements IUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.findMany({});
  }
}
