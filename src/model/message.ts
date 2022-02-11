import { Logger } from "../utils";
import { Address } from "../enum";
import { MessageException } from "../errors";

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
    const createdMessage = new Message(
      newMessage.address,
      newMessage.name,
      newMessage.message
    );

    Object.keys(createdMessage).forEach((key) => {
      if (!createdMessage[key]) {
        Logger.error(
          `Invalid body to create a new message.\nSended value: ${Message.toString(
            createdMessage
          )}`
        );
        throw new MessageException("Invalid body to create a new message.");
      }
    });

    return createdMessage;
  }

  public static toString(message: Message): string {
    return `{
      address: ${message.address}
      name: ${message.name},
      message: ${message.message}
    }`;
  }
}
