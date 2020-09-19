import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardItemComponent } from './course-card-item.component';

describe('CourseCardItemComponent', () => {
  let component: CourseCardItemComponent;
  let fixture: ComponentFixture<CourseCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
