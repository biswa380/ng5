import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Hero } from './models/hero'
import { error } from 'protractor';
import { DataService } from '../data.service'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {

  constructor(private http: HttpClient, private _data: DataService, private cookie:CookieService) { }

  reqHeader = new HttpHeaders({Authorization:'bearer '+this._data.access_key.access_token})
  hero: Hero={
    counter:null,
    id:null,
    name:null,
    power:null
  };

  heroes:any;

  ngOnInit() {
    this.getHeroList();
  }

  addHero(){
   this.http.post('/api/saveHero', this.hero, {headers:this.reqHeader}).subscribe(response=>{
     console.log(response);
   },error=>{
     console.log(error);
   })
   this.hero={
    counter:null,
    id:null,
    name:null,
    power:null
  };
  this.getHeroList();
  }

  getHeroList(){
      this.http.get('/api/getHeroes',{headers:this.reqHeader}).subscribe(res=>{
      console.log(res);
      this.heroes=res;      
    })
  }

}
