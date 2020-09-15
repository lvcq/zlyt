import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBgComponent } from './login-bg.component';

describe('LoginBgComponent', () => {
  let component: LoginBgComponent;
  let fixture: ComponentFixture<LoginBgComponent>;

  beforeEach(async(() => {
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
