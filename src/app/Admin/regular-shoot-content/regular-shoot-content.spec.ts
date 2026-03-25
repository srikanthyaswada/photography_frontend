import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularShootContent } from './regular-shoot-content';

describe('RegularShootContent', () => {
  let component: RegularShootContent;
  let fixture: ComponentFixture<RegularShootContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularShootContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularShootContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
