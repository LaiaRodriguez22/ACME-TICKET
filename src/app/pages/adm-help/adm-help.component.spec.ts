import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHelpComponent } from './adm-help.component';

describe('AdmHelpComponent', () => {
  let component: AdmHelpComponent;
  let fixture: ComponentFixture<AdmHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmHelpComponent]
    });
    fixture = TestBed.createComponent(AdmHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
