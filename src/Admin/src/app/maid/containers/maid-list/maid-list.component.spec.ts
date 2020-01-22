import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidListComponent } from './maid-list.component';

describe('MaidListComponent', () => {
  let component: MaidListComponent;
  let fixture: ComponentFixture<MaidListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
