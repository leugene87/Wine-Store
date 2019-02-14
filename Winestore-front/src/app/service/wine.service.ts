import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Wine} from '../models/wine';
import {AppSettings} from '../service/appSettings';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private getAllWineUrl = AppSettings.BASE_URL + 'api/wine/all';
  private createWineUrl = AppSettings.BASE_URL + 'api/wine/create';
  private deleteWineUrl = AppSettings.BASE_URL + 'api/';

  constructor(private http: HttpClient) { }

  getAllWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.getAllWineUrl);
  }

  postWine(wine: Wine): Observable<Wine[]> {
    return this.http.post<Wine[]>(this.createWineUrl, wine);
  }

  deleteWine(id: string): Observable<any> {
    return this.http.delete(this.deleteWineUrl + id);
  }

}
