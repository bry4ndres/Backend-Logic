import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://localhost:7028/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.url}/users`);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.url}/users`, user);
  }

  deleteUser(id: number) {
    return this.http.put(`${this.url}/users`, id);
  }

  addUser(user: User) {
    return this.http.post(`${this.url}/users`, user);
  }
}
