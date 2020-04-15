import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../environments/environment';
import { UserLoginForm, UserRegistrationForm } from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly userTokenKey = 'userToken';

  constructor(private http: HttpClient) {
  }

  getUserToken(): string {
    return localStorage.getItem(this.userTokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getUserToken();
  }

  login(loginForm: UserLoginForm) {
    return this.http.post(BASE_URL + '/login', loginForm);
  }

  registration(registrationForm: UserRegistrationForm) {
    return this.http.post(BASE_URL + '/registration', registrationForm);
  }

  saveUserToken(token: string) {
    localStorage.setItem(this.userTokenKey, token);
  }
}
