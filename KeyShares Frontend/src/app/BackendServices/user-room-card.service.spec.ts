import { TestBed } from '@angular/core/testing';

import { UserRoomCardService } from './user-room-card.service';

describe('UserRoomCardService', () => {
  let service: UserRoomCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRoomCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
