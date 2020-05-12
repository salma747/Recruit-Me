import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestTechniqueComponent} from "./test-technique/test-technique.component";


const routes: Routes = [{path: '', component: TestTechniqueComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTechniqueRoutingModule { }
