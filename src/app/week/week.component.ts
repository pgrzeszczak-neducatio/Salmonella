import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../shared/services/reservations.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewReservationModalComponent } from '../shared/modals/new-reservation-modal/new-reservation-modal.component';

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  public days: any = [];
  public slots: any = [];

  constructor(private reservationsService: ReservationsService, private modalService: NgbModal) {
    for (let i = 7; i <= 18; i++) {
      this.slots.push({ hour: `${i}:00` });
    }
  }

  public ngOnInit() {
    this.reservationsService.fetchReservations()
      .subscribe((days) => {
        this.days = days;
      });
  }

  public addReservation({day, slot}) {
    const modalRef = this.modalService.open(NewReservationModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.reservation = {day: day.id, hour: slot.hour};
  }

}
