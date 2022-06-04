import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdesListComponent } from './ordes-list.component';

describe('OrdesListComponent', () => {
  let component: OrdesListComponent;
  let fixture: ComponentFixture<OrdesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
