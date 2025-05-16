import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoomAllInformationComponent } from './user-room-all-information.component';

describe('UserRoomAllInformationComponent', () => {
  let component: UserRoomAllInformationComponent;
  let fixture: ComponentFixture<UserRoomAllInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoomAllInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoomAllInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
