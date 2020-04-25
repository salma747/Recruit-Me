import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private baseUrl = '/gestionnaire-des-candidats/candidats';

  constructor(private http: HttpClient) { }

  getCandidat(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addCandidat(candidat: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, candidat);
  }

  updateCandidat(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCandidat(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAllCandidat(): Observable<any> {
    // return this.http.get<any>(`${this.baseUrl}/all`).pipe(map(data => data._embedded.candidadats));
    return this.http.get(`${this.baseUrl}/all`);

  }
}