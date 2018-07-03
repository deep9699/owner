import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowquantityComponent } from './lowquantity.component';

describe('LowquantityComponent', () => {
  let component: LowquantityComponent;
  let fixture: ComponentFixture<LowquantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowquantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
