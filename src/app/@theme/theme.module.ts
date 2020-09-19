import {NgModule} from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbRadioModule,
  NbSelectModule,
  NbSidebarModule,
  NbTabsetModule,
  NbUserModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

const NB_MODULES = [
  // Layout
  NbLayoutModule, NbListModule, NbActionsModule, NbSidebarModule, NbMenuModule,
  // Nb Components
  NbButtonModule, NbCardModule, NbContextMenuModule, NbTabsetModule, NbListModule,
  NbTabsetModule,
  // Forms
  NbFormFieldModule, NbInputModule, NbRadioModule, NbSelectModule,
  // Icons
  NbEvaIconsModule, NbIconModule,
  // Others
  NbUserModule,
];

const CUSTOM_COMPONENTS = [
  HeaderComponent, FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    ...NB_MODULES,
  ],
  declarations: [
    ...CUSTOM_COMPONENTS
  ],
  exports: [
    CommonModule,
    ...CUSTOM_COMPONENTS,
    ...NB_MODULES,
  ]
})
export class ThemeModule {
}
