import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNewRequestComponent } from './btn-new-request.component';

describe('BtnNewRequestComponent', () => {
  let component: BtnNewRequestComponent;
  let fixture: ComponentFixture<BtnNewRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnNewRequestComponent]
    });
    fixture = TestBed.createComponent(BtnNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
