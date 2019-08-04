import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekActionsComponent } from './week-actions.component';

describe('WeekActionsComponent', () => {
  let component: WeekActionsComponent;
  let fixture: ComponentFixture<WeekActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
