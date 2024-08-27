export interface Ticket {
  id?: string;
  priority: string;
  title: string;
  user_email?: string;
  description?: string;
};

export interface Tickets {
  tickets: Ticket[];
}