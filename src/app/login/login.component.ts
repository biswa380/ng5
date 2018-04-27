import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  user={
    username : '',
    password: ''
  }
  login(){
    // this.http.post('login',this.user).subscribe(response=>console.log(response))
    var reqHeader = new HttpHeaders({authorization:'Basic '+ btoa('biswa:pass')});
    this.http.post('http://localhost:8080/oauth/token?grant_type=client_credentials&username='+this.user.username+'&password='+this.user.password,{"headers":reqHeader})
    .subscribe(response=>console.log(response))
  }

}

