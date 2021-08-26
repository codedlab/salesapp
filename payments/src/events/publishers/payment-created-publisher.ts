import { Subjects, Publisher, PaymentCreatedEvent } from "@saylab/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
