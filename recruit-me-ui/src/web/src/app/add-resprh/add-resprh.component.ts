import { Component, OnInit } from '@angular/core';
import {ResprhService} from "../resprh.service";
import {Router} from "@angular/router";
import {resprh} from "../resprh";


@Component({
  selector: 'app-add-resprh',
  templateUrl: './add-resprh.component.html',
  styleUrls: ['./add-resprh.component.css']
})
export class AddResprhComponent implements OnInit {

  responsableRH: resprh = new resprh();
  submitted = false;

  constructor(private responsableService: ResprhService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newResponsableRH(): void {
    this.submitted = false;
    this.responsableRH = new resprh();
  }

  add() {
    this.responsableService.addResponsable(this.responsableRH)
        .subscribe(data => this.responsableRH = new resprh(), error => console.log(error));

    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.add();
  }

  gotoList() {
    this.router.navigate(['/responsableRH']);
  }
}