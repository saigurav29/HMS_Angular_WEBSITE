import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFoodIemComponent } from './add-edit-food-iem.component';

describe('AddEditFoodIemComponent', () => {
  let component: AddEditFoodIemComponent;
  let fixture: ComponentFixture<AddEditFoodIemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFoodIemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFoodIemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
