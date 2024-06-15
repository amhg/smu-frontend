import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestapiService} from "../rest-api/restapi.service";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  isSuccess = false;

  constructor(private service: RestapiService,
              private router:Router,
              private http: HttpClient,
              public toastService: ToastService) { }

  ngOnInit() {
  }

  Login(){
    console.log("Log: " + this.username + "-" +  this.password)

    let bodyData = {
      username: this.username,
      password: this.password
    }

    /*
    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
*/

    this.http.post("http://localhost:8080/api/v1/login", bodyData)
      .subscribe(
      ((resultData: any) => {
        console.log("Login Message: " + resultData);
        if(resultData.message == "Login Success") {
          this.isSuccess = true;
          //alert("You are Registered!")
          this.router.navigate(['/employee', bodyData.username]);
        }
      })
    )
  }

}


/*
*   doLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      //this.router.navigate(["/home"])
    });
  }
* */
