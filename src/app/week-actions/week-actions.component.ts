import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../shared/services/reservations.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewReservationModalComponent } from '../shared/modals/new-reservation-modal/new-reservation-modal.component';

@Component({
  selector: 'week-actions',
  templateUrl: './week-actions.component.html',
  styleUrls: ['./week-actions.component.scss']
})
export class WeekActionsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public openModal() {
    const modalRef = this.modalService.open(NewReservationModalComponent, {
      centered: true,
    });
  }

}
