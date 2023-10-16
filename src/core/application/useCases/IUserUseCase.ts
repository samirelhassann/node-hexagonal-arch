import { User } from "@/core/domain/entities/User";

export interface IUserUseCase {
  getUsers(): Promise<User[]>;
}
