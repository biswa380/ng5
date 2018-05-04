import { Component } from '@angular/core';
import { DataService } from './data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _data:DataService, private cookie:CookieService, private router:Router){}
  logout(){
    this._data=null;
    this.cookie.delete('access_token');
    this.cookie.delete('refresh_token');

    alert('User logged out!!!')
    this.router.navigateByUrl('login');
  }
}
