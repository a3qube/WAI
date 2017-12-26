import { Component, OnInit, Input } from '@angular/core';
import {listParams} from '../params-list/list-params';
@Component({
  selector: 'app-param-details',
  templateUrl: './param-details.component.html',
  styleUrls: ['./param-details.component.css']
})
export class ParamDetailsComponent implements OnInit {
	
	@Input() value : listParams;

  constructor() { }

  ngOnInit() {
  }

}
