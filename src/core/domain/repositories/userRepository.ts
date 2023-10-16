import { PaginationParams } from "../base/repositories/PaginationParams";
import { User } from "../entities/User";

export interface UserRepository {
  findMany(params?: PaginationParams): Promise<User[]>;
}
