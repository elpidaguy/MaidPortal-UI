import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomeComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
