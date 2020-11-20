import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebPreviewComponent } from './web-preview.component';

describe('WebPreviewComponent', () => {
  let component: WebPreviewComponent;
  let fixture: ComponentFixture<WebPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
