import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { CookieService } from 'ngx-cookie-service'


@Injectable()
export class LoggedInAuthGuardService implements CanActivate{

  public isLoggedIn: boolean=false;
  public redirectUrl: string;

  constructor(private router:Router, private cookie: CookieService) { }

  public canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    return this.checkLogin();
  }

  checkLogin(){
    if(this.cookie.get('access_token')!=''){
      return true;
    }else{
      this.router.navigateByUrl('login');
      alert('User not logged in !!!')
      return false
    }
    
  }

}
