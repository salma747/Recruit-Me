import { Component, OnInit } from '@angular/core';
import {recruteur} from "../recruteur";
import {RecruteurService} from "../recruteur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-recruteurs',
  templateUrl: './list-recruteurs.component.html',
  styleUrls: ['./list-recruteurs.component.css']
})
export class ListRecruteursComponent implements OnInit {

  recruteur: recruteur[];

  constructor(private recruteurService: RecruteurService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.recruteurService.getAllRecruteur().subscribe(data => this.recruteur = data);
  }

  deleteRecruteur(id: number) {
    this.recruteurService.deleteRecruteur(id)
        .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
  }

  //candidatDetails(id: number){
  //this.router.navigate(['details', id]);
  //}
}
