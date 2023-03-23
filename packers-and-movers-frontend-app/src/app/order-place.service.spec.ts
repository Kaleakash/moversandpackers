import { TestBed } from '@angular/core/testing';

import { OrderPlaceService } from './order-place.service';

describe('OrderPlaceService', () => {
  let service: OrderPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
