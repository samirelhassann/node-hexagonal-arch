import { EmptyArgumentError } from "./error/EmptyArgumentError";

export class AssertionConcern {
  public static AssertTextArgumentNotEmpty(argument: string) {
    if (argument === null || argument === undefined || argument === "") {
      throw new EmptyArgumentError(argument);
    }
  }
}
