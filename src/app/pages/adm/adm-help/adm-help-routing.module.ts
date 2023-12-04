import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmHelpComponent } from '../adm-help/adm-help.component';

const routes: Routes = [
  { path: '', component: AdmHelpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmHelpRoutingModule { }
