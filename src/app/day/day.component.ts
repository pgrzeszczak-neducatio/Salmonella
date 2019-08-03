import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() public day: any = {};
  @Input() public slots: any;

  constructor() {
  }

  ngOnInit() {
  }

}
