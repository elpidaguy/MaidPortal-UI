import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ErrorHandler} from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//app modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //app modules
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
