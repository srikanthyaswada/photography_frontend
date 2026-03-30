import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLaunchShoot } from './product-launch-shoot';

describe('ProductLaunchShoot', () => {
  let component: ProductLaunchShoot;
  let fixture: ComponentFixture<ProductLaunchShoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLaunchShoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLaunchShoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
