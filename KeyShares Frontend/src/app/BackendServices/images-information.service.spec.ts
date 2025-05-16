import { TestBed } from '@angular/core/testing';

import { ImagesInformationService } from './images-information.service';

describe('ImagesInformationService', () => {
  let service: ImagesInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
