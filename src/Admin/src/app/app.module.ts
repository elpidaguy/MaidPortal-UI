import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent

  ],
  imports: [
    /**
     * app modules
     */
    AppRoutingModule,
    AdminModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,

    /**
     * third party modules
     * only those that must be installed
     * with forRoot should be defined here, all else
     * can live in shared
     */
    SharedModule.forRoot(),
    ToastrModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
