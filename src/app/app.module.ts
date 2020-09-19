import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ThemeModule} from './@theme/theme.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    ThemeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
