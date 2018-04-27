import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LegendsComponent } from './legends/legends.component';
import { LoginComponent } from './login/login.component'
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

intercept(req: HttpRequest<any>, next: HttpHandler) {
const xhr = req.clone({
headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
});
return next.handle(xhr);
}
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LegendsComponent,
    LoginComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,        // Add the FormsModule here
      BrowserAnimationsModule,
      HttpClientModule
    ],
  providers: [DataService,{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
