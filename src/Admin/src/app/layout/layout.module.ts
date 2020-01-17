import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomeComponent, MainComponent],
  imports: [
<<<<<<< HEAD
    CommonModule,
    layoutRoutingModule
  ],
  exports:[
    HeaderComponent
=======
    CommonModule
>>>>>>> 3a86b7496ee067d3103d9a5e4c7d42ddd0bc559d
  ]
})
export class LayoutModule { }
