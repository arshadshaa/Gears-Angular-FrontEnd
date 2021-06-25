import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }
  
  getData(){
    return this.httpClient.get('http://localhost:8000/api/all-books');
  }

  insertData(data:any) {
    return this.httpClient.post('http://localhost:8000/api/book', data, { headers: this.setHeaders() });
  }

  signup(data: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, data)
  }

  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, data)
  }

  logout(data: any) {
    return this.httpClient.post(`${this.baseUrl}/logout`, data)
  }

  getAuthorsBook() {
    return this.httpClient.get(`${this.baseUrl}/book?limit=10&page=1`, { headers: this.setHeaders() })
  }

  getAllAuthors() {
    return this.httpClient.get(`${this.baseUrl}/authors`, { headers: this.setHeaders() })
  }

  changestatus(data: any) {
    return this.httpClient.get(`${this.baseUrl}/changeUserStatus`, data)
  }

  handle(token:any) {
    this.set(token);
  }

  set(token: any) {
    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }


  payload(token: any) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload: any) {
    return JSON.parse(atob(payload));
  }

  setHeaders()
  {
    let headers ={
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.get()}`
    }

    return headers;
  }
}
