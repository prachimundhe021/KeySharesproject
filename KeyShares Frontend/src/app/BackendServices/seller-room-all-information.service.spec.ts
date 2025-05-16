import { TestBed } from '@angular/core/testing';

import { SellerRoomAllInformationService } from './seller-room-all-information.service';

describe('SellerRoomAllInformationService', () => {
  let service: SellerRoomAllInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerRoomAllInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
