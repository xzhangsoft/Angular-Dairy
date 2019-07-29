import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobx1Component } from './mobx1.component';

describe('Mobx1Component', () => {
  let component: Mobx1Component;
  let fixture: ComponentFixture<Mobx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mobx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mobx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
