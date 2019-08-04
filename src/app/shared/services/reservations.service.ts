import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private all: any = [
    { label: 'Dzisiaj', reservations: [{ hour: '10:00', lasts: 8, owner: 'Stefan', name: 'Fajne spotkanie', color: 'color-1' }] },
    { label: 'Jutro', reservations: [] },
    { label: 'Środa', reservations: [{ hour: '9:30', lasts: 12, owner: 'Loca Team', name: 'Oddanie sprintu', color: 'color-3' }, { hour: '13:15', lasts: 4, owner: 'Macio', name: 'Jedzenie', color: 'color-2' }] },
    { label: 'Czwartek', reservations: [] },
    { label: 'Piątek', reservations: [] },
  ];

  public fetchReservations() {
    return of(this.all);
  }
}
