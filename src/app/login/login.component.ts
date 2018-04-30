import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DataService } from '../data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private _data: DataService, private router:Router) { }

  ngOnInit() {
  }
  user={
    username : '',
    password: ''
  }
  login(){
    // this.http.post('login',this.user).subscribe(response=>console.log(response))
    var reqHeader = new HttpHeaders({authorization:'Basic '+ btoa('skaterik:pass')});
    this.http.post('http://localhost:8095/oauth/token?grant_type=client_credentials&username='+this.user.username+'&password='+this.user.password,{"headers":reqHeader})
    .subscribe(response=>{
      console.log(response)
      this._data.access_key=response;
      this.router.navigateByUrl('legends');
    })

    
  }

}

