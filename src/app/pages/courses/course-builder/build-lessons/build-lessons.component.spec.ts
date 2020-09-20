import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildLessonsComponent } from './build-lessons.component';

describe('BuildLessonsComponent', () => {
  let component: BuildLessonsComponent;
  let fixture: ComponentFixture<BuildLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
