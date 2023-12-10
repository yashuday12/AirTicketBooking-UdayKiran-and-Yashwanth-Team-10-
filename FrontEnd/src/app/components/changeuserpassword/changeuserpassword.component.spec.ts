import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeuserpasswordComponent } from './changeuserpassword.component';

describe('ChangeuserpasswordComponent', () => {
  let component: ChangeuserpasswordComponent;
  let fixture: ComponentFixture<ChangeuserpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeuserpasswordComponent]
    });
    fixture = TestBed.createComponent(ChangeuserpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
