import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestTechniqueComponent} from "../test-technique/test-technique/test-technique.component";
import {TestTechniqueRModule} from "./test-technique-r.module";
import {AddTestComponent} from "./add-test/add-test.component";
import {ListTestComponent} from "./list-test/list-test.component";
import { UpdateTestComponent } from "./update-test/update-test.component";


const routes: Routes = [
   // {path: '', component: TestTechniqueRModule},
  {path: 'new', component: AddTestComponent},
  {path: '', component: ListTestComponent},
  {path: 'update', component: UpdateTestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTechniqueRRoutingModule { }
