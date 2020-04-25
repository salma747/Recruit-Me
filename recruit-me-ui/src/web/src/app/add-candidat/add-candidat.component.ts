import { CandidatService } from '../candidat.service';
import { candidat } from '../candidat';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {
  candidat: candidat = new candidat();
  submitted = false;

  constructor(private candidatService: CandidatService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newCandidat(): void {
    this.submitted = false;
    this.candidat = new candidat();
  }

  add() {
    this.candidatService.addCandidat(this.candidat)
        .subscribe(data => this.candidat = new candidat(), error => console.log(error));

    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.add();
  }

  gotoList() {
    this.router.navigate(['/candidats']);
  }
}