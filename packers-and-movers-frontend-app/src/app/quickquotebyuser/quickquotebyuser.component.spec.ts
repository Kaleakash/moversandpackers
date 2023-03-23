import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickquotebyuserComponent } from './quickquotebyuser.component';

describe('QuickquotebyuserComponent', () => {
  let component: QuickquotebyuserComponent;
  let fixture: ComponentFixture<QuickquotebyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickquotebyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickquotebyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
