import { Component, OnInit } from '@angular/core';
import { Recruteur } from '../../../core/models/recruteur';
import {RecruteurService} from "../../../core/services/recruteur-service/recruteur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-recruteurs',
  templateUrl: './add-recruteurs.component.html',
  styleUrls: ['./add-recruteurs.component.css']
})
export class AddRecruteursComponent implements OnInit {

  recruteur: Recruteur = new Recruteur();
  submitted = false;
  viewPassword = false;

  constructor(private recruteurService: RecruteurService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newRecruteur(): void {
    this.submitted = false;
    this.recruteur = new Recruteur();
  }

  add() {
    this.recruteurService.addRecruteur(this.recruteur)
        .subscribe(data => {
          this.recruteur = new Recruteur();
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
    this.router.navigate(['/recruteur']);
  }
  toggleViewPassword() {
    this.viewPassword = !this.viewPassword;
  }
}
