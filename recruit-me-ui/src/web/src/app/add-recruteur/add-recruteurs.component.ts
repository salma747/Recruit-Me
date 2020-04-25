import { Component, OnInit } from '@angular/core';
import { recruteur } from '../recruteur';
import {RecruteurService} from "../recruteur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-recruteurs',
  templateUrl: './add-recruteurs.component.html',
  styleUrls: ['./add-recruteurs.component.css']
})
export class AddRecruteursComponent implements OnInit {

  recruteur: recruteur = new recruteur();
  submitted = false;

  constructor(private recruteurService: RecruteurService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newRecruteur(): void {
    this.submitted = false;
    this.recruteur = new recruteur();
  }

  add() {
    this.recruteurService.addRecruteur(this.recruteur)
        .subscribe(data => this.recruteur = new recruteur(), error => console.log(error));

    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.add();
  }

  gotoList() {
    this.router.navigate(['/recruteur']);
  }
}
