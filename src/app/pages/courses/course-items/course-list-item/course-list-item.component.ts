import {Component, Input, OnInit} from '@angular/core';
import {CoreConstant} from '../../../../@core/utils/core-constant';
import {Course} from '../../../../@core/data/course/course';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {

  API_ROUTES = CoreConstant.APP_ROUTES;
  @Input() course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
