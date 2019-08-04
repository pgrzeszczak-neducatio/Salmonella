import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewReservationModalComponent } from '../shared/modals/new-reservation-modal/new-reservation-modal.component';

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() public day: any = {};
  @Input() public slots: any;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {}

  addReservation(slot) {
    const modalRef = this.modalService.open(NewReservationModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.reservation = {day: this.day.id, hour: slot.hour};
  }

}
