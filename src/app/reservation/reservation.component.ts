import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../shared/models/reservation.model';
import { ReservationsService } from '../shared/services/reservations.service';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  @Input() public reservation: Reservation;

  constructor(private reservationsService: ReservationsService) { }

  ngOnInit() {

  }

  public get reservationClasses() {
    const topSuffix = this.reservation.hour.replace(':', '');
    const lastsSuffix = this.reservation.lasts;
    return [`reservation-starts-${topSuffix}`, `reservation-lasts-${lastsSuffix}`, this.reservation.color];
  }

  public removeReservation() {
    this.reservationsService.removeReservation(this.reservation);
  }
}
