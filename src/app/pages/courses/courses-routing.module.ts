import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CourseViewComponent} from './course-view.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';

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
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {
}
