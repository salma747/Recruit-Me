import { Component, OnInit } from '@angular/core';
import { Recruteur } from '../../../core/models/recruteur';
import {ActivatedRoute, Router} from "@angular/router";
import {RecruteurService} from "../../../core/services/recruteur-service/recruteur.service";

@Component({
  selector: 'app-update-recruteur',
  templateUrl: './update-recruteur.component.html',
  styleUrls: ['./update-recruteur.component.css']
})
export class UpdateRecruteurComponent implements OnInit {

  id: number;
  recruteur: Recruteur;

  constructor(private route: ActivatedRoute,private router: Router,
              private recruteurService: RecruteurService) { }

  ngOnInit(): void {
    this.recruteur = new Recruteur();

    this.id = this.route.snapshot.params['id'];

    this.recruteurService.getRecruteur(this.id)
        .subscribe(data => {
          console.log(data)
          this.recruteur = data;
        }, error => console.log(error));
  }
  updateRecruteur() {
    this.recruteurService.updateRecruteur(this.id, this.recruteur)
        .subscribe(data => {
          console.log(data);
              this.recruteur = new Recruteur();
          this.gotoList();
        },  error => console.log(error));

  }

  onSubmit() {
    this.updateRecruteur();
  }

  gotoList() {
    this.router.navigate(['/recruteur']);
  }



}


