import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickquoteComponent } from './quickquote.component';

describe('QuickquoteComponent', () => {
  let component: QuickquoteComponent;
  let fixture: ComponentFixture<QuickquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickquoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
