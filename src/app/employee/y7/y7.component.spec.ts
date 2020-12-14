import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y7Component } from './y7.component';

describe('Y7Component', () => {
  let component: Y7Component;
  let fixture: ComponentFixture<Y7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Y7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
