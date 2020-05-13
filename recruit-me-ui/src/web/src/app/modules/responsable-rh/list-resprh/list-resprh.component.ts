import { Component, OnInit } from '@angular/core';
import { ResprhService } from "../../../core/services/resprh-service/resprh.service";
import {Router} from "@angular/router";
import {ResponsableRH} from "../../../core/models/responsableRH";
import {YesOrNOComponent} from "../../../shared/yes-or-no/yes-or-no.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthenticationService} from "../../../login/auth.service";

@Component({
  selector: 'app-list-resprh',
  templateUrl: './list-resprh.component.html',
  styleUrls: ['./list-resprh.component.css']
})
export class ListResprhComponent implements OnInit {
  responsablesRH: ResponsableRH[];

  constructor(private resprhService: ResprhService, private authService: AuthenticationService,
              private router: Router, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.reloadData();
  }

  reloadData() {
    this.resprhService.getAllResponsable().subscribe(data => this.responsablesRH = data);
  }

  deleteResponsable(id: number) {
    const nomUtilisateur = this.responsablesRH.filter(responsableRH => responsableRH.id === id)[0].nomUtilisateur;
    const dialogRef = this.dialog.open(YesOrNOComponent, {
      width: '250px',
      data: {message: `Voulez vous supprimer ${nomUtilisateur} ?`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
          this.resprhService.deleteResponsable(id)
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


}

