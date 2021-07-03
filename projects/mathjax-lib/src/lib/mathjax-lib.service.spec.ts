import { TestBed } from '@angular/core/testing';

import { MathjaxLibService } from './mathjax-lib.service';

describe('MathjaxLibService', () => {
  let service: MathjaxLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathjaxLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
