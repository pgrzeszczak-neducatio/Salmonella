import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationsService } from '../../services/reservations.service';
import { Day } from '../../models/day.model';
import { Color } from '../../models/color.model';

@Component({
  selector: 'app-new-reservation-modal',
  templateUrl: './new-reservation-modal.component.html',
  styleUrls: ['./new-reservation-modal.component.scss']
})
export class NewReservationModalComponent implements OnInit {
  @Input() public reservation: any = {};
  public addNewForm: FormGroup;
  public availableDays: Day[] = [];
  public hours: string[] = [];
  public colors: Color[] = [];

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, public reservationsService: ReservationsService) {

  }

  ngOnInit() {
    let defaults = {
      day: null,
      hour: '8:00',
      lasts: 4,
      owner: '',
      name: '',
      color: 'color-1',
      ...this.reservation
    }
    this.addNewForm = this.formBuilder.group(defaults);
    this.reservationsService.fetchAvailableDays()
      .subscribe(days => {
        this.availableDays = days;
      });
    this.reservationsService.fetchColors()
      .subscribe(colors => {
        this.colors = colors;
      });
    for (let i = 8; i <= 18; i++) {
      for (const j of ['00', '15', '30', '45']) {
        this.hours.push(`${i}:${j}`);
      }
    }
  }

  submit() {
    const { day, ...reservation } = this.addNewForm.value;
    this.reservationsService.addNewReservation(day, reservation);
    this.activeModal.close();
  }

}
