import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from '../auth/jwt-response';
import { AuthLoginInfo } from '../models/login-info';
import { SignUpInfo } from '../models/signup-info';
import {AppSettings} from './appSettings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = AppSettings.BASE_URL + 'api/auth/signin';
  private signupUrl = AppSettings.BASE_URL + 'api/auth/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    console.log(JSON.stringify(info));
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
