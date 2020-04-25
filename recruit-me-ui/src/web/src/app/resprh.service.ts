import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {resprh} from "./resprh";

@Injectable({
  providedIn: 'root'
})
export class ResprhService {

  private baseUrl = 'http://localhost:8083/gestionnaire-des-responsables-ressources-humaines/responsable';

  constructor(private http: HttpClient) { }

 public getResponsable(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public addResponsable(responsable: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, responsable);
  }

  public updateResponsable(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  public deleteResponsable(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  public getAllResponsable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);

  }
}




