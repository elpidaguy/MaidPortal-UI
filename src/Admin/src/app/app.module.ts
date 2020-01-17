import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';


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
    AuthModule,
    BrowserModule,
    LayoutModule,

    /**
     * third party modules
     * only those that must be installed
     * with forRoot should be defined here, all else
     * can live in shared
     */
    SharedModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
