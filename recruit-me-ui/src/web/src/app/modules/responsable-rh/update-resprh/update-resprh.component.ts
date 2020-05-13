import { Component, OnInit } from '@angular/core';
import { ResponsableRH } from '../../../core/models/responsableRH';
import {ActivatedRoute, Router} from "@angular/router";
import {ResprhService} from "../../../core/services/resprh-service/resprh.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RecruteurService} from "../../../core/services/recruteur-service/recruteur.service";

@Component({
  selector: 'app-update-resprh',
  templateUrl: './update-resprh.component.html',
  styleUrls: ['./update-resprh.component.css']
})
export class UpdateResprhComponent implements OnInit {

  id: number;
  resprh: ResponsableRH;
  submitted = false;
  loading = undefined;

  constructor(private route: ActivatedRoute,private router: Router,
              private resprhService: ResprhService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resprh = new ResponsableRH();

    this.id = this.route.snapshot.params['id'];

    this.resprhService.getResponsable(this.id)
        .subscribe(data => {
          console.log(data)
          this.resprh = data;
        }, error => console.log(error));
  }
  updateResponsable() {
    this.resprhService.updateResponsable(this.id, this.resprh)
        .subscribe(data => {
          console.log(data);
          this.resprh = new ResponsableRH();
          this.gotoList();
            this._snackBar.open("utilisateur modifié", "OK", {
                duration: 2000,
            });
        }, error => console.log(error));

  }

  onSubmit() {
    this.updateResponsable();
  }

  gotoList() {
    this.router.navigate(['/responsable-rh']);
  }

}

