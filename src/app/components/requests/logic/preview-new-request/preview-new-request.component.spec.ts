import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewNewRequestComponent } from './preview-new-request.component';

describe('PreviewNewRequestComponent', () => {
  let component: PreviewNewRequestComponent;
  let fixture: ComponentFixture<PreviewNewRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewNewRequestComponent]
    });
    fixture = TestBed.createComponent(PreviewNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
