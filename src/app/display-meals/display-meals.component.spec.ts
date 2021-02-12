import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayMealsComponent } from './display-meals.component';

describe('DiplayMealsComponent', () => {
  let component: DiplayMealsComponent;
  let fixture: ComponentFixture<DiplayMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplayMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
