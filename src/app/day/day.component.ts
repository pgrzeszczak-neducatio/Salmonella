import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() public day: any = {};
  @Input() public slots: any;
  @Output() public slotClicked = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {}

  addReservation(slot) {
    this.slotClicked.emit({day: this.day, slot });
  }

}
