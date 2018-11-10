import { TestBed, async, inject } from '@angular/core/testing';

import { ManagerRoutingGuard } from './manager-routing.guard';

describe('ManagerRoutingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerRoutingGuard]
    });
  });

  it('should ...', inject([ManagerRoutingGuard], (guard: ManagerRoutingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
