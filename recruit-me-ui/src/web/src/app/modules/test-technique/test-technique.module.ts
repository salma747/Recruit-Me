import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTechniqueRoutingModule } from './test-technique-routing.module';
import { TestTechniqueComponent } from './test-technique/test-technique.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [TestTechniqueComponent],
  imports: [
    CommonModule,
    TestTechniqueRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TestTechniqueModule { }
