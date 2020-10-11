import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengComplexComponent } from './primeng-complex.component';

describe('PrimengComplexComponent', () => {
  let component: PrimengComplexComponent;
  let fixture: ComponentFixture<PrimengComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
