export class MessageException extends Error {
  constructor(paramName?: string) {
    super(paramName);
    this.name = "MessageException";
  }
}
