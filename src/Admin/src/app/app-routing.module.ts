import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AppModule } from './app.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './layout/home/home.component';


const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch :'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
