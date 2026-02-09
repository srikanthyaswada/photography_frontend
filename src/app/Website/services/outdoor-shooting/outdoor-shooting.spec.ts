import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorShooting } from './outdoor-shooting';

describe('OutdoorShooting', () => {
  let component: OutdoorShooting;
  let fixture: ComponentFixture<OutdoorShooting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutdoorShooting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorShooting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
