import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlNewRequestComponent } from './mdl-new-request.component';

describe('MdlNewRequestComponent', () => {
  let component: MdlNewRequestComponent;
  let fixture: ComponentFixture<MdlNewRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdlNewRequestComponent]
    });
    fixture = TestBed.createComponent(MdlNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
