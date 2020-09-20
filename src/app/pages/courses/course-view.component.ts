import {Component, OnInit} from '@angular/core';
import {Course} from '../../@core/data/course/course';
import {CourseService} from '../../@core/data/course/course.service';
import {CoreConstant} from '../../@core/utils/core-constant';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss']
})
export class CourseViewComponent implements OnInit {

  API_ROUTES = CoreConstant.APP_ROUTES;
  courses: Course[];

  VIEW = {GRID: 'GRID', LIST: 'LIST', TABLE: 'TABLE'};
  currentView: string = this.VIEW.GRID;

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(value => {
      this.courses = value;
    });
  }

}
