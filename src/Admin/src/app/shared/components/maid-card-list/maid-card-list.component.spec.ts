import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidCardListComponent } from './maid-card-list.component';

describe('MaidCardListComponent', () => {
  let component: MaidCardListComponent;
  let fixture: ComponentFixture<MaidCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
