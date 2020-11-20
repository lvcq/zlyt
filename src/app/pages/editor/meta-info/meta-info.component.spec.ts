import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MetaInfoComponent } from './meta-info.component';

describe('MetaInfoComponent', () => {
  let component: MetaInfoComponent;
  let fixture: ComponentFixture<MetaInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
