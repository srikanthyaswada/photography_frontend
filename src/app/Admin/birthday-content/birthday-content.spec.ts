import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayContent } from './birthday-content';

describe('BirthdayContent', () => {
  let component: BirthdayContent;
  let fixture: ComponentFixture<BirthdayContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
