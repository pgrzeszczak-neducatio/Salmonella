import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Week } from '../models/week.model';
import { Day } from '../models/day.model';
import { Color } from '../models/color.model';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private days: Day[] = [
    { id: 1, label: 'Dzisiaj' },
    { id: 2, label: 'Jutro' },
    { id: 3, label: 'Środa' },
    { id: 4, label: 'Czwartek' },
    { id: 5, label: 'Piątek' },
  ];

  private all: Week = [
    { id: 1, label: 'Dzisiaj', reservations: [{ hour: '10:00', lasts: 8, owner: 'Stefan', name: 'Fajne spotkanie', color: 'color-1' }] },
    { id: 2, label: 'Jutro', reservations: [] },
    { id: 3, label: 'Środa', reservations: [{ hour: '9:30', lasts: 12, owner: 'Loca Team', name: 'Oddanie sprintu', color: 'color-3' }, { hour: '13:15', lasts: 4, owner: 'Macio', name: 'Jedzenie', color: 'color-2' }] },
    { id: 4, label: 'Czwartek', reservations: [] },
    { id: 5, label: 'Piątek', reservations: [] },
  ];

  // http://chir.ag/projects/name-that-color/
  private colors: Color[] = [
    { label: 'Cranberry', cssClass: 'color-1' },
    { label: 'Puerto Rico', cssClass: 'color-2' },
    { label: 'Golden Tainoi', cssClass: 'color-3' },
  ];

  public fetchReservations() {
    return of(this.all);
  }

  public fetchAvailableDays() {
    return of(this.days);
  }

  public fetchColors() {
    return of(this.colors);
  }

  public addNewReservation(dayId: number, reservation: Reservation) {
    this.all.find(day => day.id === dayId).reservations.push(reservation);
  }

  public removeReservation(reservation: Reservation) {
    for (const day of this.all) {
      day.reservations = day.reservations.filter(r => r !== reservation);
    }
  }
}
