import { Subjects, Publisher, OrderCancelledEvent } from "@saylab/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
