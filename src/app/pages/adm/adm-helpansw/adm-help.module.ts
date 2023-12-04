import { RouterModule, Routes } from "@angular/router";
import { AdmHelpanswComponent } from "../adm-helpansw/adm-helpansw.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    { path: '', component: AdmHelpanswComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})export class AdmHelpAnswRoutingModule{}