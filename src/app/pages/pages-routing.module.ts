import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdmHelpComponent } from '../pages/adm/adm-help/adm-help.component';

const routes: Routes = [
  {
    path: '', component: AdmHelpComponent,
    children: [
      {
        path: 'admHelpAnsw',
        loadChildren: () => import('../pages/adm/adm-helpansw/adm-help.module').then(m => m.AdmHelpAnswRoutingModule)
      },
      {
        path: 'help',
        loadChildren: () => import('./help/help.module').then(m => m.HelpModule)
      },
      { path: '', redirectTo: '/home/homeAdm', pathMatch: 'full' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
