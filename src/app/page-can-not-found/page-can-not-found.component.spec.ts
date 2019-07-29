import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCanNotFoundComponent } from './page-can-not-found.component';

describe('PageCanNotFoundComponent', () => {
  let component: PageCanNotFoundComponent;
  let fixture: ComponentFixture<PageCanNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCanNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCanNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
