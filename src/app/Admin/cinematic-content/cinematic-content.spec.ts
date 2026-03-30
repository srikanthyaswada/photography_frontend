import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematicContent } from './cinematic-content';

describe('CinematicContent', () => {
  let component: CinematicContent;
  let fixture: ComponentFixture<CinematicContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinematicContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinematicContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
