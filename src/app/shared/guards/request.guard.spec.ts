import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { requestGuard } from './request.guard';

describe('requestGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => requestGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
