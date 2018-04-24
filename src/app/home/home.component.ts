import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
import { DataService } from '../data.service'
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('employeeList', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  employeeName :string;
  employeeListLength :number;
  employeeList = [];
  constructor(private _data: DataService, private http: HttpClientModule) { }

  ngOnInit() {
    this.employeeListLength=this.employeeList.length;
    if(this._data.employees!=this.employeeList){
      this.employeeList=this._data.employees;
      this.employeeListLength=this.employeeList.length;
    }
    
    // this._data.changeEmployeeList(this.employeeList);
  }

  addEmployee(){
    this.employeeList.push(this.employeeName);
    this.employeeName='';
    this.employeeListLength=this.employeeList.length;
    this._data.employees=this.employeeList;
    // this._data.changeEmployeeList(this.employeeList);
  }

}
