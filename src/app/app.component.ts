import { Component } from '@angular/core';
import {headerValues} from './headerValues';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  		headerDetails = headerValues;

}
