import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseViewComponent} from './course-view.component';
import {CourseCardItemComponent} from './course-items/course-card-item/course-card-item.component';
import {CourseListItemComponent} from './course-items/course-list-item/course-list-item.component';
import {CourseTableItemComponent} from './course-items/course-table-item/course-table-item.component';
import {ThemeModule} from '../../@theme/theme.module';
import {CoursesRoutingModule} from './courses-routing.module';
import {SearchCourseComponent} from './search-course/search-course.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {CreateCourseComponent} from './course-builder/create-course/create-course.component';
import {CourseBuilderComponent} from './course-builder/course-builder.component';
import {BuildLessonsComponent} from './course-builder/build-lessons/build-lessons.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    DragDropModule,
  ],
  declarations: [
    CourseViewComponent,
    CourseCardItemComponent,
    CourseListItemComponent,
    CourseTableItemComponent,
    SearchCourseComponent,
    CourseDetailComponent,
    CreateCourseComponent,
    CourseBuilderComponent,
    BuildLessonsComponent
  ]
})
export class CourseModule {
}
