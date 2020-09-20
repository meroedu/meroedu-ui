import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CourseViewComponent} from './course-view.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {CourseBuilderComponent} from './course-builder/course-builder.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: CourseViewComponent,
    },
    {
      path: 'detail/:id',
      component: CourseDetailComponent,
    },
    {
      path: 'create',
      component: CourseBuilderComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {
}
