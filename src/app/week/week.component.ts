import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../shared/services/reservations.service';

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  public days: any = [];
  public slots: any = [];

  constructor(private reservationsService: ReservationsService) {
    for (let i = 7; i <= 18; i++) {
      this.slots.push({ hour: `${i}:00` });
    }
  }

  ngOnInit() {
    this.reservationsService.fetchReservations()
      .subscribe((days) => {
        this.days = days;
      });
  }

}
