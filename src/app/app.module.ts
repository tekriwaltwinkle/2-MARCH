import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import {FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {HttpClientModule} from "@angular/common/http";
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StudentPageComponent } from './student-page/student-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    StudentLoginComponent,
    NavbarComponent,
    AdminLoginComponent,
    AdminPageComponent,
    StudentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
