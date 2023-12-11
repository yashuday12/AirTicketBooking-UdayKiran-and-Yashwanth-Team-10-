import { TestBed } from '@angular/core/testing';

import { FlightownerService } from './flightowner.service';

describe('FlightownerService', () => {
  let service: FlightownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightownerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
