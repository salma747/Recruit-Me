import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private user;

    constructor(private http: HttpClient) {

    }

    login(username: string, password: string) {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        const result = this.http.post(environment.loginUrl, formData, {withCredentials: true});
        result.subscribe(data => {
            console.log('here')
            this.loadUser();

        });
        return result;
    }

  loadUser() {
    return this.http.get<any>(environment.loginUrl + '/me', {withCredentials: true})
        .subscribe(data => localStorage.setItem("login", JSON.stringify(data)));
  }

  public getUser() {
    return this.user;
  }

    logout() {
        localStorage.removeItem("login")
    }
}