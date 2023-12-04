import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHelpanswComponent } from './adm-helpansw.component';

describe('AdmHelpanswComponent', () => {
  let component: AdmHelpanswComponent;
  let fixture: ComponentFixture<AdmHelpanswComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmHelpanswComponent]
    });
    fixture = TestBed.createComponent(AdmHelpanswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
