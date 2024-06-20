import { Component } from '@angular/core';
import {Persona, timeTracking} from "../employee/employeeModel/employee";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private sub: any;
  employeeRfc: string;
  personaData : Persona;

  registryValue: string = ''
  registryRadio: string = ''
  tracking: timeTracking[] =[];
  employeeCheckInTime: string = ''

  constructor(private route: ActivatedRoute, private http: HttpClient){
    this.employeeRfc = '';
    this.personaData = new Persona();
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

 addTracking(){
   this.registryRadio = this.registryValue;
   let currentDate = new Date();
   this.employeeCheckInTime = currentDate.toLocaleString();

   this.tracking.push({registryType: this.registryRadio, date: this.employeeCheckInTime });
   console.log(this.tracking);
 }

}
