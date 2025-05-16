import { TestBed } from '@angular/core/testing';

import { UserRoomAllInformationService } from './user-room-all-information.service';

describe('UserRoomAllInformationService', () => {
  let service: UserRoomAllInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRoomAllInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
