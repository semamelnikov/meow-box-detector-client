import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule, DialogModule, InputTextModule } from 'primeng';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './core/guard/auth.guard';
import { UserService } from './core/services/user.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    StatisticsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    DialogModule
  ],
  providers: [ AuthGuard, HttpClient, UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
