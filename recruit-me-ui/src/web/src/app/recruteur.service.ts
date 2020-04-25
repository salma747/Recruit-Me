import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {recruteur} from "./recruteur";

@Injectable({
  providedIn: 'root'
})
export class RecruteurService {

  private baseUrl = 'http://localhost:8082/gestionnaire-des-recruteurs/recruteur';

  constructor(private http: HttpClient) { }

  getRecruteur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addRecruteur(recruteur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, recruteur);
  }

  updateRecruteur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRecruteur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAllRecruteur(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);

  }
}