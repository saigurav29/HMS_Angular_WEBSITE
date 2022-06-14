import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillprintComponent } from './billprint.component';

describe('BillprintComponent', () => {
  let component: BillprintComponent;
  let fixture: ComponentFixture<BillprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
