export class MessageControllerException extends Error {
  constructor(paramName?: string) {
    super(paramName);
    this.name = "MessageControllerException";
  }
}
