import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    slides = [

        "https://i.ytimg.com/vi/q8nR4_QDEkE/maxresdefault.jpg",
        "https://i0.wp.com/doingbuzz.com/wp-content/uploads/2018/07/recrutement-1500x630.jpg",
        "https://www.travailler-a-domicile.fr/wp-content/uploads/2016/08/devenir-redacteur-web.jpeg",

    ];
  constructor() { }
  ngOnInit() {

  }

}
