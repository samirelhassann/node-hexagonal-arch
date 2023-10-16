/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class ValueObject<T> {
  protected props: T;

  constructor(props: T) {
    this.props = props;
  }

  public equals(entity: ValueObject<any>) {
    return entity === this;
  }
}
