import { Component, OnInit } from '@angular/core';
import { candidat } from '../candidat';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css']
})
export class UpdateCandidatComponent implements OnInit {

  id: number;
  candidat: candidat;

  constructor(private route: ActivatedRoute,private router: Router,
              private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidat = new candidat();

    this.id = this.route.snapshot.params['id'];

    this.candidatService.getCandidat(this.id)
        .subscribe(data => {
          console.log(data)
          this.candidat = data;
        }, error => console.log(error));
  }
  updateCandidat() {
    this.candidatService.updateCandidat(this.id, this.candidat)
        .subscribe(data => console.log(data), error => console.log(error));
    this.candidat = new candidat();
    this.gotoList();
  }

  onSubmit() {
    this.updateCandidat();
  }

  gotoList() {
    this.router.navigate(['/candidats']);
  }

}
