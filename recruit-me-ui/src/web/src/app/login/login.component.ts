import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(){ }

  ngOnInit(): void {
  }

//./layouts/admin-layout/admin-layout.module#AdminLayoutModule


  login() {
    // @ts-ignore
    //this.router.navigateByUrl('./layouts/admin-layout/admin-layout.module#AdminLayoutModule');

  }
}
