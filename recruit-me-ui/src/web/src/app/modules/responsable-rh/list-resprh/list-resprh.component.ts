import { Component, OnInit } from '@angular/core';
import { ResprhService } from "../../../core/services/resprh-service/resprh.service";
import {Router} from "@angular/router";
import {ResponsableRH} from "../../../core/models/responsableRH";

@Component({
  selector: 'app-list-resprh',
  templateUrl: './list-resprh.component.html',
  styleUrls: ['./list-resprh.component.css']
})
export class ListResprhComponent implements OnInit {

  responsablesRH: ResponsableRH[];

  constructor(private resprhService: ResprhService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.resprhService.getAllResponsable().subscribe(data => this.responsablesRH = data);
  }

  deleteResponsable(id: number) {
    this.resprhService.deleteResponsable(id)
        .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
  }


}

