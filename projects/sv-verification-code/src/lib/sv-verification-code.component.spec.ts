import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvVerificationCodeComponent } from './sv-verification-code.component';

describe('SvVerificationCodeComponent', () => {
  let component: SvVerificationCodeComponent;
  let fixture: ComponentFixture<SvVerificationCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvVerificationCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvVerificationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
