/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoolCardComponent } from './pool-card.component';

describe('PoolCardComponent', () => {
  let component: PoolCardComponent;
  let fixture: ComponentFixture<PoolCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
