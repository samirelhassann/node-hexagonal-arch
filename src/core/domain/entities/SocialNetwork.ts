import { Entity } from "../base/entities/Entity";
import { UniqueEntityId } from "../base/entities/UniqueEntityId";
import { Optional } from "../base/types/Optional";

interface SocialNetworkProps {
  name: string;
  url: string;
  token: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class SocialNetwork extends Entity<SocialNetworkProps> {
  constructor(
    props: Optional<SocialNetworkProps, "createdAt">,
    id?: UniqueEntityId
  ) {
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

  get url() {
    return this.props.url;
  }

  get token() {
    return this.props.token;
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
