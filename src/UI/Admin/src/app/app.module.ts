import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ErrorHandler} from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//app modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //here sequence is important bcz authmodule has given high priority for routing to avoid 
    //unesessary page not found routing of approutingmodule
    //app modules
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
