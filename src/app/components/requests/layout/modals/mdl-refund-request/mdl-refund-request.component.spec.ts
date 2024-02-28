import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlRefundRequestComponent } from './mdl-refund-request.component';

describe('MdlRefundRequestComponent', () => {
  let component: MdlRefundRequestComponent;
  let fixture: ComponentFixture<MdlRefundRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdlRefundRequestComponent]
    });
    fixture = TestBed.createComponent(MdlRefundRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
