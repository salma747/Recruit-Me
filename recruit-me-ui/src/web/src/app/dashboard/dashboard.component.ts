import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    slides = [
        "https://dms.licdn.com/video-thumbs/C4D05AQGwKnPOr9_4ug/65cfb3c515e34ac8a3b662eb55f5d249/feedshare-videocover_low-captions-thumbnails/480x270-00001.jpg",
        "https://www.arondor.com/wp-content/uploads/2019/01/oly_testwow_stage.jpg",
        "https://test.io/wp-content/uploads/2019/02/testIO-logo-rgb-2.png"
    ];
  constructor() { }
  ngOnInit() {

  }

}
