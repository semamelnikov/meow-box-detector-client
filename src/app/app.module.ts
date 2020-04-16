import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ButtonModule, CardModule, DialogModule, InputTextModule, ToggleButtonModule, VirtualScrollerModule } from 'primeng';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { AuthGuard } from './core/guard/auth.guard';
import { DeviceService } from './core/services/device.service';
import { StatisticsService } from './core/services/statistics.service';
import { UserService } from './core/services/user.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    LoginComponent,
    RegistrationComponent,
    StatisticsComponent,
    CatComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    NgxChartsModule,
    ToggleButtonModule,
    VirtualScrollerModule
  ],
  providers: [ AuthGuard, DeviceService, HttpClient, StatisticsService, UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
