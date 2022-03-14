export class KafkaException extends Error {
  constructor(paramName?: string) {
    super(paramName);
    this.name = "KafkaException";
  }
}
