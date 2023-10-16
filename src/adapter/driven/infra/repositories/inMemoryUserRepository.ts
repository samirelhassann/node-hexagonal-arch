import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  PaginationParams,
} from "@/core/domain/base/repositories/PaginationParams";
import { User } from "@/core/domain/entities/User";
import { UserRepository } from "@/core/domain/repositories/userRepository";

export class InMemoryUserRepository implements UserRepository {
  public items: User[] = [];

  async findMany({
    page = DEFAULT_PAGE,
    size = DEFAULT_PAGE_SIZE,
  }: PaginationParams): Promise<User[]> {
    const answers = this.items.slice((page - 1) * size, page * size);

    return answers;
  }
}
