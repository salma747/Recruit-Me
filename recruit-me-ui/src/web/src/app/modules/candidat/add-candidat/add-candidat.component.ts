import { CandidatService } from '../../../core/services/candidat-service/candidat.service';
import { Candidat } from '../../../core/models/candidat';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder} from "@angular/forms";
import {HttpEventType} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {
  candidat: Candidat = new Candidat();
  submitted = false;
  loading = undefined;
  downloadUrl = environment.baseUrlCandidat+'candidats/file/';
  viewPassword = false;
  private url: SafeUrl = './assets/img/faces/marc.jpg';

  constructor(private candidatService: CandidatService,
              private formBuilder: FormBuilder,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  newCandidat(): void {
    this.submitted = false;
    this.candidat = new Candidat();
  }

  add() {
    this.candidatService.addCandidat(this.candidat)
        .subscribe(data => {
          this.candidat = new Candidat();
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

  fileChanged1(event) {
    console.log("test");
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (file) => {
        const url = window.URL.createObjectURL(new Blob([file.target.result], {type: 'image/png'}));
        this.url = this.sanitizer.bypassSecurityTrustUrl(url);
        this.candidatService.uploadFile(event.target.files[0]).subscribe(value => {
          if (value.type === HttpEventType.UploadProgress) {
            this.loading = 100 * value.loaded / value.total;
          }
          if (value.type === HttpEventType.Response) {
            this.loading = undefined;
            this.candidat.photo = value.body;
          }
        });
      }
    }
  }

    toggleViewPassword() {
        this.viewPassword = !this.viewPassword;
    }
}