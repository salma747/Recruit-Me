import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../../core/models/candidat';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../../../core/services/candidat-service/candidat.service';
import {HttpEventType} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css']
})
export class UpdateCandidatComponent implements OnInit {

  id: number;
  candidat: Candidat;
  submitted = false;
  loading = undefined;

  constructor(private route: ActivatedRoute,private router: Router,
              private candidatService: CandidatService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.candidat = new Candidat();

    this.id = this.route.snapshot.params['id'];

    this.candidatService.getCandidat(this.id)
        .subscribe(data => {
          console.log(data)
          this.candidat = data;
        }, error => console.log(error));
  }
  updateCandidat() {
    this.candidatService.updateCandidat(this.id, this.candidat)
        .subscribe(data => {
          console.log(data);
          this.candidat = new Candidat();
          this.gotoList();
            this._snackBar.open("utilisateur modifié", "OK", {
                duration: 2000,
            });
        }, error => console.log(error));

  }

  onSubmit() {
    this.updateCandidat();
  }

  gotoList() {
    this.router.navigate(['/candidats']);
  }

    fileChanged(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                this.candidatService.uploadFile(event.target.files[0]).subscribe(value => {
                    if (value.type === HttpEventType.UploadProgress) {
                        this.loading = 100 * value.loaded / value.total;
                    }
                    if (value.type === HttpEventType.Response) {
                        this.loading = undefined;
                        this.candidat.cv = value.body;
                    }
                });
            }
        }
    }
}
