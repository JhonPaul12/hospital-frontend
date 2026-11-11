import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { specialtyDTO } from '../dto/specialty.dto';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor(private httpClient: HttpClient) { }

  getSpecialties():Observable<specialtyDTO[]> {
    return this.httpClient.get<specialtyDTO[]>('http://localhost:9700/specialty');
  }

  getSpecialtyById(id: number): Observable<specialtyDTO> {
    return this.httpClient.get<specialtyDTO>(`http://localhost:9700/specialty/${id}`);
  }

  createSpecialty(specialty: specialtyDTO): Observable<specialtyDTO> {
    return this.httpClient.post<specialtyDTO>('http://localhost:9700/specialty', specialty);
  }

  updateSpecialty(id: number, specialty: specialtyDTO): Observable<specialtyDTO> {
    return this.httpClient.put<specialtyDTO>(`http://localhost:9700/specialty/${id}`, specialty);
  }

  deleteSpecialty(id: number): Observable<specialtyDTO> {
    return this.httpClient.delete<specialtyDTO>(`http://localhost:9700/specialty/${id}`);
  }
}
