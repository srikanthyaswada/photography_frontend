import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorShooting } from './indoor-shooting';

describe('IndoorShooting', () => {
  let component: IndoorShooting;
  let fixture: ComponentFixture<IndoorShooting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorShooting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndoorShooting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
