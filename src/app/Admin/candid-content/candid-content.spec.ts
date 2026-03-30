import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidContent } from './candid-content';

describe('CandidContent', () => {
  let component: CandidContent;
  let fixture: ComponentFixture<CandidContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
