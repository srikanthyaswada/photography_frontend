import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteHome } from './website-home';

describe('WebsiteHome', () => {
  let component: WebsiteHome;
  let fixture: ComponentFixture<WebsiteHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
