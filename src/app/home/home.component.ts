import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registryValue: string = ''
  registryType: string = ''
  divs: number[] = [];

 createDiv(){
   this.registryType = this.registryValue;
   this.divs.push(this.divs.length);
 }

}
