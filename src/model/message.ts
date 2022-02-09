import { Address } from "../enum";

export class Message {
  private address: Address;
  private name: string;
  private message: string;

  private constructor(address: Address, name: string, message: string) {
    this.address = address;
    this.name = name;
    this.message = message;
  }

  public static newMessage(newMessage: {
    address: Address;
    name: string;
    message: string;
  }): Message {
    return new Message(newMessage.address, newMessage.name, newMessage.message);
  }

  public static toString(message: Message): string {
    return `{
      address: ${message.address}
      name: ${message.name},
      message: ${message.message}
    }`
  }
}
