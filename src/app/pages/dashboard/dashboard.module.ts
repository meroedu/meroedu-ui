import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {ThemeModule} from '../../@theme/theme.module';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ThemeModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
