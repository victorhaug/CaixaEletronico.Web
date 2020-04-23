import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositarActionComponent } from './depositar-action.component';

describe('DepositarActionComponent', () => {
  let component: DepositarActionComponent;
  let fixture: ComponentFixture<DepositarActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositarActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositarActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
