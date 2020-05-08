import { TestBed } from '@angular/core/testing';

import { RecruteurGuard } from './recruteur.guard';

describe('RecruteurGuard', () => {
  let guard: RecruteurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RecruteurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
