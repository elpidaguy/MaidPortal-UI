import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { layoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    HomeComponent, 
    MainComponent],
  imports: [
    CommonModule,
    layoutRoutingModule
  ]
  
})
export class LayoutModule { }
