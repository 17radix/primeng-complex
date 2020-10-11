import { TestBed } from '@angular/core/testing';

import { PrimengComplexService } from './primeng-complex.service';

describe('PrimengComplexService', () => {
  let service: PrimengComplexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimengComplexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
