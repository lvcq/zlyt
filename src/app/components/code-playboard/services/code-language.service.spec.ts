import { TestBed } from '@angular/core/testing';

import { CodeLanguageService } from './code-language.service';

describe('CodeLanguageService', () => {
  let service: CodeLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
