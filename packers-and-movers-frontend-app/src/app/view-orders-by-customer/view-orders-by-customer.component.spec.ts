import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersByCustomerComponent } from './view-orders-by-customer.component';

describe('ViewOrdersByCustomerComponent', () => {
  let component: ViewOrdersByCustomerComponent;
  let fixture: ComponentFixture<ViewOrdersByCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersByCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrdersByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
