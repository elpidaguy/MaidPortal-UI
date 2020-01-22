import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidCardComponent } from './maid-card.component';

describe('MaidCardComponent', () => {
  let component: MaidCardComponent;
  let fixture: ComponentFixture<MaidCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
