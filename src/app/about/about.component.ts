import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  employees: any;

  constructor(private router:Router, private _data: DataService) { 
    // this._data.changeEmployeeList(res => this.employees=res);
    this.employees=this._data.employees;
  }

  
  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigateByUrl('');
  }

}
