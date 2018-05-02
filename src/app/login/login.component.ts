import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DataService } from '../data.service'
import { Router } from '@angular/router'
import {Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private _data: DataService, private router:Router, private cookie: CookieService) { 

    

    var reqHeader = new HttpHeaders({authorization:'Basic c2thdGVyaWs6cGFzcw=='});
    let myObservable=Observable.interval(20000);

    myObservable.subscribe(x=>{
      this.http.post('/oauth/token?grant_type=refresh_token&refresh_token='+this.cookie.get('refresh_token'),{"headers":reqHeader})
      .subscribe(response=>{
        console.log(response)
        this._data.access_key=response;
      })
    })
  }

  ngOnInit() {
  }
  user={
    username : '',
    password: ''
  }
  login(){
    // this.http.post('login',this.user).subscribe(response=>console.log(response))
    // var reqHeader = new HttpHeaders({authorization:'Basic '+ btoa('skaterik:pass')});
    
    var reqHeader = new HttpHeaders({authorization:'Basic c2thdGVyaWs6cGFzcw=='});
    this.http.post('/oauth/token?grant_type=password&username='+this.user.username+'&password='+this.user.password,{"headers":reqHeader})
    .subscribe(response=>{
      console.log(response)
      this._data.access_key=response;
      this.cookie.set('access_token',this._data.access_key.access_token);
      this.cookie.set('refresh_token',this._data.access_key.refresh_token);
      this.http.get('/user').subscribe(user=>console.log(user));
      this.router.navigateByUrl('legends');
    })
  }
  
  
}

