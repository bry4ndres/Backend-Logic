import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../Interfaces/Pet';

@Injectable({
  providedIn: 'root',
})
export class PetserviceService {
  private url = 'https://localhost:7028/api';

  constructor(private http: HttpClient) {}

  getPets(): Observable<any> {
    return this.http.get<any>(`${this.url}/pets`);
  }

  updatePet(pet: Pet): Observable<any> {
    return this.http.put(`${this.url}/pets`, pet);
  }

  deletePet(id: number) {
    return this.http.put(`${this.url}/pets`, id);
  }

  addPet(pet: Pet) {
    return this.http.post(`${this.url}/pets`, pet);
  }
}
