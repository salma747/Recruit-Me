import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNOComponent } from './yes-or-no/yes-or-no.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [YesOrNOComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [YesOrNOComponent]
})
export class SharedModule { }
