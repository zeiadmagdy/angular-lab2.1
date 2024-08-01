import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface User {
  id: number;
  username: string;
  isAdmin: boolean;
  email: string;
  phone: string;
  profilePicture: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => users.map(user => ({ ...user, isAdmin: this.generateRandomAdmin() })))
    );
  }

  private generateRandomAdmin(): boolean {
    return Math.random() < 0.5;
  }
}

