import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRoomAllInfromationComponent } from './seller-room-all-infromation.component';

describe('SellerRoomAllInfromationComponent', () => {
  let component: SellerRoomAllInfromationComponent;
  let fixture: ComponentFixture<SellerRoomAllInfromationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerRoomAllInfromationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerRoomAllInfromationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
