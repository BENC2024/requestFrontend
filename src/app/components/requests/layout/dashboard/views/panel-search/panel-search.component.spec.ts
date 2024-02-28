import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSearchComponent } from './panel-search.component';

describe('PanelSearchComponent', () => {
  let component: PanelSearchComponent;
  let fixture: ComponentFixture<PanelSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSearchComponent]
    });
    fixture = TestBed.createComponent(PanelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
