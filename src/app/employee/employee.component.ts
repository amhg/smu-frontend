import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Persona} from "./employeeModel/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit, OnDestroy {

  employeeRfc: string;
  private sub: any;
  personaData : Persona;
  dateVal = new Date();
  employeeCheckInTime;
  employeeCheckOutTime;
  isDisplayed = true;
  isCheckedIn = false;
  isCheckedOut = false;
  buttonStatus = "Registrar Ingreso";
  registryValue: string = ''

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.employeeRfc = '';
    this.personaData = new Persona();
    this.employeeCheckInTime = '00:00:00';
    this.employeeCheckOutTime = '00:00:00';
}

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.employeeRfc = params['rfc'] // (+) converts string 'id' to a number
      console.log("In Employee Component Rfc: " + this.employeeRfc);
    });

    let httpParams = new HttpParams().set('rfc', this.employeeRfc);


    this.http.get<Persona>("http://localhost:8080/api/v1/persona", {params: httpParams})
      .subscribe(
        (persona => {
          console.log(persona)
          this.personaData = persona;
        })
      );
  }


  trackTime() {
    this.isCheckedIn = true;
   /*
    let currentDate = new Date();
    console.log("Radio button value: " + this.registryValue)
    this.isCheckedIn = true;
    this.employeeCheckInTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
   */

    /*
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
*/

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
