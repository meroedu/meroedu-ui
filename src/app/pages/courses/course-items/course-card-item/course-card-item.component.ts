import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../../@core/data/course/course';
import {CoreConstant} from '../../../../@core/utils/core-constant';

@Component({
  selector: 'app-course-card-item',
  templateUrl: './course-card-item.component.html',
  styleUrls: ['./course-card-item.component.scss']
})
export class CourseCardItemComponent implements OnInit {

  API_ROUTES = CoreConstant.APP_ROUTES;
  @Input() course: Course;

  constructor() {
  }

  ngOnInit(): void {
  }

}
