import { Address } from "../enum";

export class Message {
  private address: Address;
  private name: string;
  private message: string;
  private date: string;

  private constructor(address: Address, name: string, message: string) {
    this.address = address;
    this.name = name;
    this.message = message;
    this.date = new Date().toISOString();
  }

  public static newMessage(newMessage: {
    address: Address;
    name: string;
    message: string;
  }): Message {
    Object.keys(newMessage).forEach((key) => {
      if (!key) throw new Error("Deu ruim!");
    });

    return new Message(newMessage.address, newMessage.name, newMessage.message);
  }
}
