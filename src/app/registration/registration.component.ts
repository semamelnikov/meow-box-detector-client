import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationForm } from '../core/model/auth.model';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ './registration.component.css' ]
})
export class RegistrationComponent {
  deviceName: string;
  login: string;
  password: string;
  name: string;
  weight: number;
  age: number;
  breed: string;

  successMessage: string;
  errorMessage: string;

  constructor(private userService: UserService,
              private router: Router) {
  }

  confirmSuccessRegistration() {
    this.successMessage = undefined;
    this.goToLoginPage();
  }

  registration() {
    if (this.isValid()) {
      const registrationForm = this.createRegistrationForm();
      this.userService.registration(registrationForm).subscribe(
        () => this.successMessage = 'Successful registration!',
        () => this.errorMessage = 'Please check your login or device name. Possibly It is already in use.'
      );
    } else {
      this.errorMessage = 'Check your fields!';
    }
  }

  goToLoginPage() {
    this.router.navigate([ 'login' ]);
  }

  private isValid() {
    return this.deviceName && this.login &&
      this.password && this.name &&
      this.weight && this.age &&
      this.breed;
  }

  private createRegistrationForm(): UserRegistrationForm {
    return {
      deviceName: this.deviceName,
      login: this.login,
      password: this.password,
      name: this.name,
      weight: this.weight,
      age: this.age,
      breed: this.breed,
    } as UserRegistrationForm;
  }
}
