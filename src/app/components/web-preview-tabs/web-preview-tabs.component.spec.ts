import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPreviewTabsComponent } from './web-preview-tabs.component';

describe('WebPreviewTabsComponent', () => {
  let component: WebPreviewTabsComponent;
  let fixture: ComponentFixture<WebPreviewTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPreviewTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPreviewTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
