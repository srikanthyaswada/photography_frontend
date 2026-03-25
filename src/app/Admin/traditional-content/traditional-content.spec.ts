import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalContent } from './traditional-content';

describe('TraditionalContent', () => {
  let component: TraditionalContent;
  let fixture: ComponentFixture<TraditionalContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionalContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionalContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
