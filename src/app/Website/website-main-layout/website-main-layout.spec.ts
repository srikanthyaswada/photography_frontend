import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMainLayout } from './website-main-layout';

describe('WebsiteMainLayout', () => {
  let component: WebsiteMainLayout;
  let fixture: ComponentFixture<WebsiteMainLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteMainLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteMainLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
