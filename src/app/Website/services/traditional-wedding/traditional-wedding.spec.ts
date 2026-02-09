import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalWedding } from './traditional-wedding';

describe('TraditionalWedding', () => {
  let component: TraditionalWedding;
  let fixture: ComponentFixture<TraditionalWedding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionalWedding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionalWedding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
