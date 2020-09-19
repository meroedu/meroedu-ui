import {NgModule} from '@angular/core';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {CoreModule} from '../@core/core.module';

@NgModule({
  imports: [
    CoreModule,
    PagesRoutingModule,
    MiscellaneousModule,
    ThemeModule,
  ],
  declarations: [
    PagesComponent,
  ]
})
export class PagesModule {
}
