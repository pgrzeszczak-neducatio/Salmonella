import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  @Input() public reservation: any;

  constructor() { }

  ngOnInit() {

  }

  public get reservationClasses() {
    const topSuffix = this.reservation.hour.replace(':', '');
    const lastsSuffix = this.reservation.lasts;
    return [`reservation-starts-${topSuffix}`, `reservation-lasts-${lastsSuffix}`, this.reservation.color];
  }
}
