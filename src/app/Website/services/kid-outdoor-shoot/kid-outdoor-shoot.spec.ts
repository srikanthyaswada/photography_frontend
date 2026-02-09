import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidOutdoorShoot } from './kid-outdoor-shoot';

describe('KidOutdoorShoot', () => {
  let component: KidOutdoorShoot;
  let fixture: ComponentFixture<KidOutdoorShoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidOutdoorShoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidOutdoorShoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
