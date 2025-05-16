import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSellerInfromationComponent } from './update-seller-infromation.component';

describe('UpdateSellerInfromationComponent', () => {
  let component: UpdateSellerInfromationComponent;
  let fixture: ComponentFixture<UpdateSellerInfromationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSellerInfromationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSellerInfromationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
