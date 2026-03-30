import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbornContent } from './newborn-content';

describe('NewbornContent', () => {
  let component: NewbornContent;
  let fixture: ComponentFixture<NewbornContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewbornContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbornContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
