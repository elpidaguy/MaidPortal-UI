import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidTableComponent } from './maid-table.component';

describe('MaidTableComponent', () => {
  let component: MaidTableComponent;
  let fixture: ComponentFixture<MaidTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
