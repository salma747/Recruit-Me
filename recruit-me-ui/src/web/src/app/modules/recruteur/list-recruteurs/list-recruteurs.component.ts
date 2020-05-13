import { Component, OnInit } from '@angular/core';
import {Recruteur} from "../../../core/models/recruteur";
import {RecruteurService} from "../../../core/services/recruteur-service/recruteur.service";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {YesOrNOComponent} from "../../../shared/yes-or-no/yes-or-no.component";

@Component({
  selector: 'app-list-recruteurs',
  templateUrl: './list-recruteurs.component.html',
  styleUrls: ['./list-recruteurs.component.css']
})
export class ListRecruteursComponent implements OnInit {

  recruteur: Recruteur[];

  constructor(private recruteurService: RecruteurService,
              private router: Router, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.recruteurService.getAllRecruteur().subscribe(data => this.recruteur = data);
  }

  deleteRecruteur(id: number) {
    const nomUtilisateur = this.recruteur.filter(recruteur => recruteur.id === id)[0].nomUtilisateur;
    const dialogRef = this.dialog.open(YesOrNOComponent, {
      width: '250px',
      data: {message: `Voulez vous supprimer ${nomUtilisateur} ?`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recruteurService.deleteRecruteur(id)
          .subscribe(
            data => {
              console.log(data);
              this._snackBar.open("utilisateur supprimé", "OK", {
                duration: 2000,
              });
              this.reloadData();
            },
            error => console.log(error));
      }
    });
  }

  //candidatDetails(id: number){
  //this.router.navigate(['details', id]);
  //}
}
