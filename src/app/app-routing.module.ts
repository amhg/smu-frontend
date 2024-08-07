import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {EmployeeComponent} from "./employee/employee.component";
import {ContentComponent} from "./content/content.component";
import {ExampleComponent} from "./example/example/example.component";

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil/:rfc',
    component: HomeComponent
  },
  {
    path: 'employee/:rfc',
    component: EmployeeComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
