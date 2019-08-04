import { Reservation } from './reservation.model';

export interface Day {
  id: number;
  label: string;
  reservations?: Reservation[];
}
