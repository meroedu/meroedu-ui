import {Component, OnInit} from '@angular/core';
import {Course} from '../../../@core/data/course/course';
import {CourseService} from '../../../@core/data/course/course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course: Course;
  private courseId: string;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.routeId();
  }

  routeId(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      this.getCourseById(this.courseId);
    });
  }

  getCourseById(id: string): void {
    this.courseService.getCourseById(id).subscribe(value => {
      this.course = value;
    });
  }
}
