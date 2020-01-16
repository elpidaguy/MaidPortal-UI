import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidsFormComponent } from './maids-form.component';

describe('MaidsFormComponent', () => {
  let component: MaidsFormComponent;
  let fixture: ComponentFixture<MaidsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
