import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeFieldComponent } from './code-field.component';

describe('CodeFieldComponent', () => {
  let component: CodeFieldComponent;
  let fixture: ComponentFixture<CodeFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
