import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMeetupContent } from './business-meetup-content';

describe('BusinessMeetupContent', () => {
  let component: BusinessMeetupContent;
  let fixture: ComponentFixture<BusinessMeetupContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessMeetupContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessMeetupContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
