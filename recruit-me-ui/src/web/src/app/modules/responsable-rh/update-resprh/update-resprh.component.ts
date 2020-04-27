import { Component, OnInit } from '@angular/core';
import { ResponsableRH } from '../../../core/models/responsableRH';
import {ActivatedRoute, Router} from "@angular/router";
import {ResprhService} from "../../../core/services/resprh-service/resprh.service";

@Component({
  selector: 'app-update-resprh',
  templateUrl: './update-resprh.component.html',
  styleUrls: ['./update-resprh.component.css']
})
export class UpdateResprhComponent implements OnInit {

  id: number;
  resprh: ResponsableRH;

  constructor(private route: ActivatedRoute,private router: Router,
              private resprhService: ResprhService) { }

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
        }, error => console.log(error));

  }

  onSubmit() {
    this.updateResponsable();
  }

  gotoList() {
    this.router.navigate(['/responsable-rh']);
  }

}

