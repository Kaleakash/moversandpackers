import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderbycustomerComponent } from './vieworderbycustomer.component';

describe('VieworderbycustomerComponent', () => {
  let component: VieworderbycustomerComponent;
  let fixture: ComponentFixture<VieworderbycustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderbycustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieworderbycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
