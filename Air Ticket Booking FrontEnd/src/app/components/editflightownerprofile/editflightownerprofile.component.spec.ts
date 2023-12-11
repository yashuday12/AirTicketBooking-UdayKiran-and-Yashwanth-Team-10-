import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditflightownerprofileComponent } from './editflightownerprofile.component';

describe('EditflightownerprofileComponent', () => {
  let component: EditflightownerprofileComponent;
  let fixture: ComponentFixture<EditflightownerprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditflightownerprofileComponent]
    });
    fixture = TestBed.createComponent(EditflightownerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
