import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,        // Add the FormsModule here
      BrowserAnimationsModule
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
