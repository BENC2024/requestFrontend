import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRequestComponent } from './table-request.component';

describe('TableRequestComponent', () => {
  let component: TableRequestComponent;
  let fixture: ComponentFixture<TableRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableRequestComponent]
    });
    fixture = TestBed.createComponent(TableRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
