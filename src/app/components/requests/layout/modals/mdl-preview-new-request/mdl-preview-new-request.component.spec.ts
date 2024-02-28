import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlPreviewNewRequestComponent } from './mdl-preview-new-request.component';

describe('MdlPreviewNewRequestComponent', () => {
  let component: MdlPreviewNewRequestComponent;
  let fixture: ComponentFixture<MdlPreviewNewRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdlPreviewNewRequestComponent]
    });
    fixture = TestBed.createComponent(MdlPreviewNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
