import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../../@core/data/course/course';
import {CoreConstant} from '../../../../@core/utils/core-constant';

@Component({
  selector: 'app-course-table-item',
  templateUrl: './course-table-item.component.html',
  styleUrls: ['./course-table-item.component.scss']
})
export class CourseTableItemComponent implements OnInit {

  API_ROUTES = CoreConstant.APP_ROUTES;
  @Input() coursesList: Course[];

  constructor() { }

  ngOnInit(): void {
  }

}
