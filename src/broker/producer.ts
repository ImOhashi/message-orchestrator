import { Kafka, logLevel, Producer } from "kafkajs";

import { Logger } from "../utils";
import { KafkaException } from "../errors";

class KafkaProducer {
  private static kafka: Kafka;
  public static producer: Producer;

  public static connect(): void {
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

    Logger.info("Trying to connect to Kafka Broker");
    this.producer
      .connect()
      .then(() => {
        Logger.info("Kafka brokker is connected!");
      })
      .catch((err) => {
        Logger.error(`Could not connect to broker.\n${err}`);
        throw new KafkaException(`Could not connect to broker.\n${err}`);
      });
  }
}

export default KafkaProducer;
