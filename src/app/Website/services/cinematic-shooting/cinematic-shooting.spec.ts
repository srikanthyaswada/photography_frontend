import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematicShooting } from './cinematic-shooting';

describe('CinematicShooting', () => {
  let component: CinematicShooting;
  let fixture: ComponentFixture<CinematicShooting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinematicShooting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinematicShooting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
