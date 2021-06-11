import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../constants/urls';
import { ICar } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarFromOfficeService {
  private url = urls.fromOffice;
  constructor(private httpClient: HttpClient) { }
  getAllCarsFromOffice(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(this.url)
  }
  postCarFromOffice(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(this.url, car);
  }
}
