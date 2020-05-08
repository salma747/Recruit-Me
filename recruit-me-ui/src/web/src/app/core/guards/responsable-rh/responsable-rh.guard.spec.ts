import { TestBed } from '@angular/core/testing';

import { ResponsableRHGuard } from './responsable-rh.guard';

describe('ResponsableRHGuard', () => {
  let guard: ResponsableRHGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResponsableRHGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
