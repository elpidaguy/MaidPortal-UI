import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
 loggedInPerson:string=null;
 loggedInPersonUsername:string=null;
  ngOnInit(){
  /* this.loggedInPerson=localStorage.getItem("loggedInPerson");
   this.loggedInPersonUsername=localStorage.getItem("loggedInPersonUsername");
   console.log(this.loggedInPerson);
   console.log(this.loggedInPerson);
   */
  }

}
