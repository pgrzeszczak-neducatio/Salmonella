import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekComponent } from './week/week.component';
import { WeekActionsComponent } from './week-actions/week-actions.component';

const routes: Routes = [
  { path: '', component: WeekComponent },
  { path: '', component: WeekActionsComponent, outlet: "actions" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
