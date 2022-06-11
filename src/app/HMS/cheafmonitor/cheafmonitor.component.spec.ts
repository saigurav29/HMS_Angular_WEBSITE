import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheafmonitorComponent } from './cheafmonitor.component';

describe('CheafmonitorComponent', () => {
  let component: CheafmonitorComponent;
  let fixture: ComponentFixture<CheafmonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheafmonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheafmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
