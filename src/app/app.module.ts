import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './day/day.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewReservationModalComponent } from './shared/modals/new-reservation-modal/new-reservation-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { WeekActionsComponent } from './week-actions/week-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    DayComponent,
    ReservationComponent,
    NewReservationModalComponent,
    WeekActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  providers: [],
  entryComponents: [NewReservationModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
