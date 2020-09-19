import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseViewComponent} from './course-view.component';
import {CourseCardItemComponent} from './course-items/course-card-item/course-card-item.component';
import {CourseListItemComponent} from './course-items/course-list-item/course-list-item.component';
import {CourseTableItemComponent} from './course-items/course-table-item/course-table-item.component';
import {ThemeModule} from '../../@theme/theme.module';
import {CoursesRoutingModule} from './courses-routing.module';
import {SearchCourseComponent} from './search-course/search-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    CourseViewComponent,
    CourseCardItemComponent,
    CourseListItemComponent,
    CourseTableItemComponent,
    SearchCourseComponent,
    CourseDetailComponent
  ]
})
export class CourseModule {
}
