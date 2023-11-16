import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHomeComponent } from './adm-home.component';

describe('AdmHomeComponent', () => {
  let component: AdmHomeComponent;
  let fixture: ComponentFixture<AdmHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmHomeComponent]
    });
    fixture = TestBed.createComponent(AdmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
