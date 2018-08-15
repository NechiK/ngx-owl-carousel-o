import { TestBed, inject } from '@angular/core/testing';

import { AnimateService } from './animate.service';
import { CarouselService } from './carousel.service';

describe('AnimateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimateService, CarouselService]
    });
  });

  it('should be created', inject([AnimateService], (service: AnimateService) => {
    expect(service).toBeTruthy();
  }));
});
