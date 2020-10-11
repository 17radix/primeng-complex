import { NgModule } from '@angular/core';

import {TabViewModule} from 'primeng/tabview';

import { CommonModule } from '@angular/common';
import {PCTabsComponent} from './tabs.component';
import {TabsViewContentDirective} from './tabs-view.directive';
import { PCTabsViewComponent } from './tabs-view.component';
@NgModule({
  declarations: [
    PCTabsComponent,
    TabsViewContentDirective,
    PCTabsViewComponent,
  ],
  imports: [
    CommonModule,
    TabViewModule,
  ],
  providers:[],
  exports:[PCTabsComponent],
})
export class PCTabsModule { }