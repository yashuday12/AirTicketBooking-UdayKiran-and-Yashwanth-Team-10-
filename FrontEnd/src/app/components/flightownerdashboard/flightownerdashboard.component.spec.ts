import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightownerdashboardComponent } from './flightownerdashboard.component';

describe('FlightownerdashboardComponent', () => {
  let component: FlightownerdashboardComponent;
  let fixture: ComponentFixture<FlightownerdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightownerdashboardComponent]
    });
    fixture = TestBed.createComponent(FlightownerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
