import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivacyPolicyComponent } from './pivacy-policy.component';

describe('PivacyPolicyComponent', () => {
  let component: PivacyPolicyComponent;
  let fixture: ComponentFixture<PivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
