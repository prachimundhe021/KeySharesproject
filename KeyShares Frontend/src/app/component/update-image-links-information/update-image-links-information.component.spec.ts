import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImageLinksInformationComponent } from './update-image-links-information.component';

describe('UpdateImageLinksInformationComponent', () => {
  let component: UpdateImageLinksInformationComponent;
  let fixture: ComponentFixture<UpdateImageLinksInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateImageLinksInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateImageLinksInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
