import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { HelpSeeTicketComponent } from './help-see-ticket/help-see-ticket.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HelpSeeTicketComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
