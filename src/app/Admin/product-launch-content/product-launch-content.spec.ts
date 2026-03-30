import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLaunchContent } from './product-launch-content';

describe('ProductLaunchContent', () => {
  let component: ProductLaunchContent;
  let fixture: ComponentFixture<ProductLaunchContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLaunchContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLaunchContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
