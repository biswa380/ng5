import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  // private employees = new BehaviorSubject<any>(['Biswa', 'Subrata', 'Debi']);
  // employee=this.employees.asObservable;

  employees: any;
  constructor() { }

  
  // changeEmployeeList(employee){
  //   this.employees.next(this.employee);
  // }

}
