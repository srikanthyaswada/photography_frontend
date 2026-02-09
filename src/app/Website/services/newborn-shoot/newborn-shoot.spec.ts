import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbornShoot } from './newborn-shoot';

describe('NewbornShoot', () => {
  let component: NewbornShoot;
  let fixture: ComponentFixture<NewbornShoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewbornShoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbornShoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
