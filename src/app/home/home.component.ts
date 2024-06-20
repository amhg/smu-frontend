import { Component } from '@angular/core';
import {timeTracking} from "../employee/employeeModel/employee";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registryValue: string = ''
  registryRadio: string = ''

  tracking: timeTracking[] =[];
  employeeCheckInTime: string = ''



 addTracking(){
   this.registryRadio = this.registryValue;
   let currentDate = new Date();
   this.employeeCheckInTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

   this.tracking.push({registryType: this.registryRadio, date: this.employeeCheckInTime });
   console.log(this.tracking);


 }

}
