import { Publisher, OrderCreatedEvent, Subjects } from "@saylab/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
