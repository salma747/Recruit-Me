import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTechniqueRRoutingModule } from './test-technique-r-routing.module';
import { AddTestComponent } from './add-test/add-test.component';
import { ListTestComponent } from './list-test/list-test.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { UpdateTestComponent } from './update-test/update-test.component';



@NgModule({
  declarations: [
    AddTestComponent,
    ListTestComponent,
    UpdateTestComponent
  ],
  imports: [
    CommonModule,
    TestTechniqueRRoutingModule,
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
export class TestTechniqueRModule { }
