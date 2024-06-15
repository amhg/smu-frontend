import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../employeeModel/employee";

const  baseUrl = 'http://localhost:8080/employee'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee(id: string): Observable<Employee>{
    return this.http.get<Employee>(baseUrl+ "/" + id);
  }
}
