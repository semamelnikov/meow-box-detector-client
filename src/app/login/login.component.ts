import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestStatus, UserLoginForm } from '../core/model/auth.model';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {

  login: string;
  password: string;

  errorMessage: string;

  constructor(private userService: UserService, private router: Router) {
  }

  loginSubmit() {
    if (this.login && this.password) {
      const userLoginForm = { login: this.login, password: this.password } as UserLoginForm;
      this.userService.login(userLoginForm).subscribe(
        (status: RequestStatus) => {
          this.userService.saveUserToken(status.text);
          this.router.navigate([ 'statistics' ]);
        },
        () => {
          this.errorMessage = 'Incorrect login or password';
        }
      );
    } else {
      this.errorMessage = 'All fields are required';
    }
  }

}
