import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-yes-or-no',
  templateUrl: './yes-or-no.component.html',
  styleUrls: ['./yes-or-no.component.css']
})
export class YesOrNOComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<YesOrNOComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {message: string}) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
  }

}
