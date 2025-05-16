import { TestBed } from '@angular/core/testing';

import { SellerInformationService } from './seller-information.service';

describe('SellerInformationService', () => {
  let service: SellerInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
