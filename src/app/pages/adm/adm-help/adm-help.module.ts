import { RouterModule, Routes } from "@angular/router";
import { AdmHelpComponent } from "../adm-help/adm-help.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    { path: '', component: AdmHelpComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})export class AdmHelpAnswRoutingModule{}