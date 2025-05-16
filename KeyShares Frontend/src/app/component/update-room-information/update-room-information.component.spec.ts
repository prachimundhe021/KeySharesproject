import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomInformationComponent } from './update-room-information.component';

describe('UpdateRoomInformationComponent', () => {
  let component: UpdateRoomInformationComponent;
  let fixture: ComponentFixture<UpdateRoomInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRoomInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRoomInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
