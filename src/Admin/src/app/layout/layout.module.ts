import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    LayoutRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent]

})
export class LayoutModule { }
