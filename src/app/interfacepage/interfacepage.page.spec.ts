import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfacepagePage } from './interfacepage.page';

describe('InterfacepagePage', () => {
  let component: InterfacepagePage;
  let fixture: ComponentFixture<InterfacepagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
