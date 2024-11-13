import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8080/student/get';

  constructor(private httpClient: HttpClient) { }

  getApi(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }
}