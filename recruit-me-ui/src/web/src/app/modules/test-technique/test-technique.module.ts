import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTechniqueRoutingModule } from './test-technique-routing.module';
import { TestTechniqueComponent } from './test-technique/test-technique.component';


@NgModule({
  declarations: [TestTechniqueComponent],
  imports: [
    CommonModule,
    TestTechniqueRoutingModule
  ]
})
export class TestTechniqueModule { }
