import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlDetailRequestComponent } from './mdl-detail-request.component';

describe('MdlDetailRequestComponent', () => {
  let component: MdlDetailRequestComponent;
  let fixture: ComponentFixture<MdlDetailRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdlDetailRequestComponent]
    });
    fixture = TestBed.createComponent(MdlDetailRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
