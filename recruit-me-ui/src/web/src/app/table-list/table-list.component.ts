import { Component, OnInit } from '@angular/core';
//import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { CandidatService } from "../candidat.service";
import { candidat } from "../candidat";
import { Router } from '@angular/router';


@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
    candidats: candidat[];

    constructor(private candidatService: CandidatService,
                private router: Router) { }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        this.candidatService.getAllCandidat().subscribe(data => this.candidats = data);
    }

    deleteCandidat(id: number) {
        this.candidatService.deleteCandidat(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log(error));
    }

    //candidatDetails(id: number){
    //this.router.navigate(['details', id]);
    //}
}
