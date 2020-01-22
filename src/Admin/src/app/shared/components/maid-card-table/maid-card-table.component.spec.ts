import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidCardTableComponent } from './maid-card-table.component';

describe('MaidCardTableComponent', () => {
  let component: MaidCardTableComponent;
  let fixture: ComponentFixture<MaidCardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidCardTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
