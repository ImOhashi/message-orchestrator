import { Kafka, logLevel, Producer } from "kafkajs";

import { Logger } from "../utils";
import { KafkaException } from "../errors";

class KafkaProducer {
  private kafka: Kafka;
  private producer: Producer;

  constructor() {
    this.kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: [process.env.KAFKA_BROKER],
      logLevel: logLevel.INFO,
      retry: {
        initialRetryTime: Number(process.env.KAFKA_INITIAL_RETRY_TIME),
        retries: Number(process.env.KAFKA_RETRIES),
      },
    });

    this.producer = this.kafka.producer();
  }

  public async connect(): Promise<void | KafkaException> {
    Logger.info("Trying to connect to Kafka Broker");
    await this.producer.connect().catch((err) => {
      throw new KafkaException(`Could not connect to broker.\n${err}`);
    });
  }
}
