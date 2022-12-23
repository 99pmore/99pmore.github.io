import { TestBed } from '@angular/core/testing';

import { BlurService } from './blur.service';

describe('BlurService', () => {
  let service: BlurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
