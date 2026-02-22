import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMeetupShoot } from './business-meetup-shoot';

describe('BusinessMeetupShoot', () => {
  let component: BusinessMeetupShoot;
  let fixture: ComponentFixture<BusinessMeetupShoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessMeetupShoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessMeetupShoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
