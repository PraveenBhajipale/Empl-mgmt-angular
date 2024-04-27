import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class employeeService {
    constructor(public http: HttpClient) { }

    public url = "http://localhost:8080";
    public getByDepartment = "employee-jpa/getByDeptId"
    public addEmp = "employee-jpa/addEmployee";
    public deleteEmp = "employee-jpa";

    getEmployees(): Observable<any> {
        return this.http.get(`${this.url}/${this.getByDepartment}/${localStorage.getItem("empId")}`, {
            observe: 'response'
        })
    }

    addEmployee(body: any): Observable<any> {
        return this.http.post(`${this.url}/${this.addEmp}`,body, {
            observe: 'response'
        })
    } 

    deleteEmployee(id: any): Observable<any> {
        return this.http.delete(`${this.url}/${this.deleteEmp}/${id}`, {
            observe: 'response'
        })
    }
}
