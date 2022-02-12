import { Message } from "../model";

export interface IMessageServices {
    getLastMessage(): Promise<string>
}