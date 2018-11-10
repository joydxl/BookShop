import { TestBed, async, inject } from '@angular/core/testing';

import { RoutingGuard } from './routing.guard';

describe('RoutingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutingGuard]
    });
  });

  it('should ...', inject([RoutingGuard], (guard: RoutingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
