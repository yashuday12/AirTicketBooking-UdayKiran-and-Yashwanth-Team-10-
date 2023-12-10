import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeflightownerpasswordComponent } from './changeflightownerpassword.component';

describe('ChangeflightownerpasswordComponent', () => {
  let component: ChangeflightownerpasswordComponent;
  let fixture: ComponentFixture<ChangeflightownerpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeflightownerpasswordComponent]
    });
    fixture = TestBed.createComponent(ChangeflightownerpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
