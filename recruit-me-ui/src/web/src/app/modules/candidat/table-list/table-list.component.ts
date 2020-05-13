import { Component, OnInit } from '@angular/core';
//import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { CandidatService } from "../../../core/services/candidat-service/candidat.service";
import { Candidat } from "../../../core/models/candidat";
import { Router } from '@angular/router';
import {environment} from "../../../../environments/environment";
import {AuthenticationService} from "../../../login/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {YesOrNOComponent} from "../../../shared/yes-or-no/yes-or-no.component";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
    candidats: Candidat[];

    downloadUrl = environment.baseUrlCandidat+'candidats/file/';

    constructor(private candidatService: CandidatService, private authService: AuthenticationService,
                private router: Router, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

    ngOnInit() {
        console.log('ngOnInit');
        this.reloadData();
    }

    // ngOnInit() {
    //     console.log('ngOnInit');
    // }
    // ngOnChanges(){
    //     console.log('ngOnChanges');
    // }
    // ngDoCheck(){
    //     console.log('ngDoCheck');
    // }
    // ngAfterContentInit(){
    //     console.log('ngAfterContentInit');
    // }
    // ngAfterContentChecked(){
    //     console.log('ngAfterContentChecked')
    // }
    // ngAfterViewInit(){
    //     console.log('ngAfterViewInit');
    // }
    // ngAfterViewChecked(){
    //     console.log('ngAfterViewChecked');
    // }
    // ngOnDestroy(){
    //     console.log('ngOnDestory');
    // }

    reloadData() {
        this.candidatService.getAllCandidat().subscribe(data => this.candidats = data);
    }

    deleteCandidat(id: number) {
        const nomUtilisateur = this.candidats.filter(candidat => candidat.id === id)[0].nomUtilisateur;
        const dialogRef = this.dialog.open(YesOrNOComponent, {
            width: '250px',
            data: {message: `Voulez vous supprimer ${nomUtilisateur} ?`}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.candidatService.deleteCandidat(id)
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
