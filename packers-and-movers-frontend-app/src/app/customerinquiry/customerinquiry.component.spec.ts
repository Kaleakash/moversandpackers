import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerinquiryComponent } from './customerinquiry.component';

describe('CustomerinquiryComponent', () => {
  let component: CustomerinquiryComponent;
  let fixture: ComponentFixture<CustomerinquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerinquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
