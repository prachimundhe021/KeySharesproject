import { TestBed } from '@angular/core/testing';

import { RoomInformationService } from './room-information.service';

describe('RoomInformationService', () => {
  let service: RoomInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
