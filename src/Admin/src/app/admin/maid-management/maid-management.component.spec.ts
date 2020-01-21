import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidManagementComponent } from './maid-management.component';

describe('MaidManagementComponent', () => {
  let component: MaidManagementComponent;
  let fixture: ComponentFixture<MaidManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
