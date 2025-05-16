import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoomCardComponent } from './user-room-card.component';

describe('UserRoomCardComponent', () => {
  let component: UserRoomCardComponent;
  let fixture: ComponentFixture<UserRoomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoomCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
