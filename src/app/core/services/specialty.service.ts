import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor(private httpClient: HttpClient) { }

  getSpecialties():Observable<any> {
    return this.httpClient.get('http://localhost:9700/specialties');
  }
}
