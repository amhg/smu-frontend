import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Employee} from "./employeeModel/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit, OnDestroy {

  employeeUsername: string;
  private sub: any;
  employeeData : Employee;
  dateVal = new Date();
  employeeCheckInTime;
  employeeCheckOutTime;
  isCheckedIn = false;
  isCheckedOut = false;
  buttonStatus = "Registrar Ingreso";

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.employeeUsername = '';
    this.employeeData = new Employee();
    this.employeeCheckInTime = '00:00:00';
    this.employeeCheckOutTime = '00:00:00';
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.employeeUsername = params['username'] // (+) converts string 'id' to a number
      console.log("In Employee Component Username: " + this.employeeUsername);
    });

    let httpParams = new HttpParams().set('username', this.employeeUsername);


    this.http.get<Employee>("http://localhost:8080/api/v1/employee", {params: httpParams})
      .subscribe(
        (employee => {
          console.log(employee)
          this.employeeData = employee;
        })
      );
  }


  trackTime() {
    let currentDate = new Date();
    if(!this.isCheckedIn){
      this.employeeCheckInTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
      this.isCheckedIn = true;
      this.buttonStatus = "Registrar Salida";
    } else {
      this.employeeCheckOutTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
      this.isCheckedIn = false;
      this.isCheckedOut = true;
      this.buttonStatus = "Registro Finalizado";
    }


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
