import { Publisher, Subjects, TicketCreatedEvent } from "@saylab/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
