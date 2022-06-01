import { TestBed } from '@angular/core/testing';

import { MtnCarouselService } from './mtn-carousel.service';

describe('MtnCarouselService', () => {
  let service: MtnCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtnCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
