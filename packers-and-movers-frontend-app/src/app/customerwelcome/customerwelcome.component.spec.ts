import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerwelcomeComponent } from './customerwelcome.component';

describe('CustomerwelcomeComponent', () => {
  let component: CustomerwelcomeComponent;
  let fixture: ComponentFixture<CustomerwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerwelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
