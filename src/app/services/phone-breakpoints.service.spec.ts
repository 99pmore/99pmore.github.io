import { TestBed } from '@angular/core/testing';

import { PhoneBreakpointsService } from './phone-breakpoints.service';

describe('PhoneBreakpointsService', () => {
  let service: PhoneBreakpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneBreakpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
