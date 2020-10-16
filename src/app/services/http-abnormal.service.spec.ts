import { TestBed } from '@angular/core/testing';

import { HttpAbnormalService } from './http-abnormal.service';

describe('HttpAbnormalService', () => {
  let service: HttpAbnormalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAbnormalService);
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
