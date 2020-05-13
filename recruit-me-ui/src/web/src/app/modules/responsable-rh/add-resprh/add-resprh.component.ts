import { Component, OnInit } from '@angular/core';
import {ResprhService} from "../../../core/services/resprh-service/resprh.service";
import {Router} from "@angular/router";
import {ResponsableRH} from "../../../core/models/responsableRH";


@Component({
  selector: 'app-add-resprh',
  templateUrl: './add-resprh.component.html',
  styleUrls: ['./add-resprh.component.css']
})
export class AddResprhComponent implements OnInit {

  responsableRH: ResponsableRH = new ResponsableRH();
  submitted = false;
  viewPassword = false;

  constructor(private responsableService: ResprhService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newResponsableRH(): void {
    this.submitted = false;
    this.responsableRH = new ResponsableRH();
  }

  add() {
    this.responsableService.addResponsable(this.responsableRH)
        .subscribe(data => {
          this.responsableRH = new ResponsableRH();
          this.gotoList();
        }, error => console.log(error));

  }

  onSubmit(form) {
    if(form.invalid) {
      return;
    }
    this.submitted = true;
    this.add();
  }

  gotoList() {
    this.router.navigate(['/responsable-rh']);
  }
  toggleViewPassword() {
    this.viewPassword = !this.viewPassword;
  }
}