import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservablepagePage } from './observablepage.page';

describe('ObservablepagePage', () => {
  let component: ObservablepagePage;
  let fixture: ComponentFixture<ObservablepagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
