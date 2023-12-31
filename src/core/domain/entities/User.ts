import { Entity } from "../base/entities/Entity";
import { UniqueEntityId } from "../base/entities/UniqueEntityId";
import { Optional } from "../base/types/Optional";
import { Taxvat } from "../valueObjects/Taxvat";

interface UserProps {
  name: string;
  email: string;
  password: string;
  taxVat: Taxvat;
  createdAt: Date;
  updatedAt?: Date;
}

export class User extends Entity<UserProps> {
  constructor(props: Optional<UserProps, "createdAt">, id?: UniqueEntityId) {
    super(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get taxVat() {
    return this.props.taxVat;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }
}
