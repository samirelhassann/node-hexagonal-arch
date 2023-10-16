import { AssertionConcern } from "../base/AssertionConcern";
import { Entity } from "../base/entities/Entity";
import { UniqueEntityId } from "../base/entities/UniqueEntityId";
import { Optional } from "../base/types/Optional";
import { ChannelType } from "./enum/ChannelType";

interface ChannelProps {
  name: string;
  type: ChannelType;
  createdAt: Date;
  updatedAt?: Date;
}

export class Channel extends Entity<ChannelProps> {
  constructor(props: Optional<ChannelProps, "createdAt">, id?: UniqueEntityId) {
    super(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    this.validateEntity();
  }

  public validateEntity() {
    AssertionConcern.AssertTextArgumentNotEmpty(this.props.name);
  }

  get name() {
    return this.props.name;
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
