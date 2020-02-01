import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidManagementUpdateComponent } from './maid-management-update.component';

describe('MaidManagementUpdateComponent', () => {
  let component: MaidManagementUpdateComponent;
  let fixture: ComponentFixture<MaidManagementUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidManagementUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
