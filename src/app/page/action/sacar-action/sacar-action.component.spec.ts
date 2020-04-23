import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarActionComponent } from './sacar-action.component';

describe('SacarActionComponent', () => {
  let component: SacarActionComponent;
  let fixture: ComponentFixture<SacarActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacarActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacarActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
