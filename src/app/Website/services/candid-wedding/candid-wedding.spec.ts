import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidWedding } from './candid-wedding';

describe('CandidWedding', () => {
  let component: CandidWedding;
  let fixture: ComponentFixture<CandidWedding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidWedding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidWedding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
