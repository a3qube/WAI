import { Component, OnInit } from '@angular/core';
import {listParams} from './list-params';
import {AllValues} from './list-param-values';

@Component({
  selector: 'app-params-list',
  templateUrl: './params-list.component.html',
  styleUrls: ['./params-list.component.css']
})
export class ParamsListComponent implements OnInit {
	
	/* list : listParams = {	 	
	 param : 'objective',
	 sequence : 1,

	 };*/

	 allValues = AllValues;

	 selectedParam = this.allValues[0];

	 onParamClick(param : listParams):void{
	 	this.selectedParam = param;
	 }
	 

  constructor() { }

  ngOnInit() {
  }

}
