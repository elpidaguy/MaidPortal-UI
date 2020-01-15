import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortMaidsComponent } from './sort-maids.component';

describe('SortMaidsComponent', () => {
  let component: SortMaidsComponent;
  let fixture: ComponentFixture<SortMaidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortMaidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortMaidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
