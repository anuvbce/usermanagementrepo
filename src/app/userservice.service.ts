import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private apiUrl = "http://localhost:3000/Users"

  constructor(private httpClient: HttpClient) { }

newUser(user:User):Observable<User>{
  return this.httpClient.post<User>(this.apiUrl, user)
}
getUser():Observable<User[]>{
  return this.httpClient.get<User[]>(this.apiUrl)
}

getUserById(id: Number): Observable<User>{
  const url = `${this.apiUrl}/${id}`
  return this.httpClient.get<User>(url)

}
editUser(user: User): Observable<User>{
  const url = `${this.apiUrl}/${user.id}`
  return this.httpClient.put<User>(url, user)
}
deleteUser(id: Number): Observable<void>{
  const url = `${this.apiUrl}/${id}`
  return this.httpClient.delete<void>(url)
}

}
