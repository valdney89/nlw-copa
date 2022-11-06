/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewPoolComponent } from './new-pool.component';

describe('NewPoolComponent', () => {
  let component: NewPoolComponent;
  let fixture: ComponentFixture<NewPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
