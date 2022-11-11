import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpickupComponent } from './studentpickup.component';

describe('StudentpickupComponent', () => {
  let component: StudentpickupComponent;
  let fixture: ComponentFixture<StudentpickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentpickupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
