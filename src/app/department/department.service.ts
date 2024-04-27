import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class departmentService {
  constructor(public http: HttpClient) { }

  public url = "http://localhost:8080";
  public getDepartment = "/department/getdept"

  getDepartments(): Observable<any> {
    return this.http.get(`${this.url}/${this.getDepartment}`, {
        observe: 'response'
    })
}
}
