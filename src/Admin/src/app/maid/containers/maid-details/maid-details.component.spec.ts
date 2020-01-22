import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidDetailsComponent } from './maid-details.component';

describe('MaidDetailsComponent', () => {
  let component: MaidDetailsComponent;
  let fixture: ComponentFixture<MaidDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
