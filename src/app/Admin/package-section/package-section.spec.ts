import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSection } from './package-section';

describe('PackageSection', () => {
  let component: PackageSection;
  let fixture: ComponentFixture<PackageSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
