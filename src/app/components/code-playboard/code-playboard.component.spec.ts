import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodePlayboardComponent } from './code-playboard.component';

describe('CodePlayboardComponent', () => {
  let component: CodePlayboardComponent;
  let fixture: ComponentFixture<CodePlayboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePlayboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePlayboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
