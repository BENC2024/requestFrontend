import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListRequestComponent } from './table-list-request.component';

describe('TableListRequestComponent', () => {
  let component: TableListRequestComponent;
  let fixture: ComponentFixture<TableListRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListRequestComponent]
    });
    fixture = TestBed.createComponent(TableListRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
