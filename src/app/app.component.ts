import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {EmployeeService} from "./employee/service/employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  employee = {
    username: "",
    password: ""
  };

  constructor(public employeeService: EmployeeService) {
  }


  onSubmit(login :NgForm){
    console.log(JSON.stringify(this.employee));
    login.reset();

    this.employeeService.getEmployee("1").subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      });
  }

  ngOnInit(): void {
  }
}
