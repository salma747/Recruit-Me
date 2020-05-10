import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Authetification Invalide';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.login(this.username, this.password).subscribe((result) => {
      console.log(result)
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Authentification avec succès.';
      setTimeout(() => this.router.navigate(['/recruit-me']), 500);
    }, (error) => {
      console.log(error)
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
