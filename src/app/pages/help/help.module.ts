import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from '../help/help-routing.module';
import { HelpComponent } from './help.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
      HelpComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedModule,
  ],
  exports: [
      HelpComponent
  ]
})
export class HelpModule { }
