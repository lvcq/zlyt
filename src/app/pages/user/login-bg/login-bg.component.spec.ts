import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginBgComponent } from './login-bg.component';

describe('LoginBgComponent', () => {
  let component: LoginBgComponent;
  let fixture: ComponentFixture<LoginBgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
