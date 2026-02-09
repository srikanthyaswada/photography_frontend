import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidBirthdayShoot } from './kid-birthday-shoot';

describe('KidBirthdayShoot', () => {
  let component: KidBirthdayShoot;
  let fixture: ComponentFixture<KidBirthdayShoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidBirthdayShoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidBirthdayShoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
