import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationWedding } from './destination-wedding';

describe('DestinationWedding', () => {
  let component: DestinationWedding;
  let fixture: ComponentFixture<DestinationWedding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationWedding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationWedding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
