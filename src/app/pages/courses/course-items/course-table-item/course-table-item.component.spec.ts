import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTableItemComponent } from './course-table-item.component';

describe('CourseTableItemComponent', () => {
  let component: CourseTableItemComponent;
  let fixture: ComponentFixture<CourseTableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
