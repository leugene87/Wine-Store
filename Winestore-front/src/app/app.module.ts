import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { WineComponent } from './wine/wine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { MatInputModule, MatSelectModule, MatOptionModule, MatFormFieldModule } from '@angular/material';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AddwineComponent } from './addwine/addwine.component';
import {MatProgressSpinnerModule, MatRadioModule, MatSliderModule} from '@angular/material';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WineComponent,
    NavbarComponent,
    AddwineComponent,
    PagenotfoundComponent,
  ],
  imports: [
    MatProgressSpinnerModule, MatRadioModule, MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [httpInterceptorProviders, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
