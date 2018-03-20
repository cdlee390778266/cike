import { TestBed, inject } from '@angular/core/testing';

import { DddService } from './ddd.service';

describe('DddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DddService]
    });
  });

  it('should be created', inject([DddService], (service: DddService) => {
    expect(service).toBeTruthy();
  }));
});
