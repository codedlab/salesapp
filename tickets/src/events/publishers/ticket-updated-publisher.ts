import { Publisher, Subjects, TicketUpdatedEvent } from "@saylab/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
