import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightOwnerComponent } from './addflightowner.component';

describe('AddFlightOwnerComponent', () => {
  let component: AddFlightOwnerComponent;
  let fixture: ComponentFixture<AddFlightOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFlightOwnerComponent]
    });
    fixture = TestBed.createComponent(AddFlightOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
