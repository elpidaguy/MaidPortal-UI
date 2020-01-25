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
import { TermsAndConditionsComponent } from './static-pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './static-pages/privacy-policy/privacy-policy.component';
import { MasterService } from './shared/services/master/master.service';
import { HttpClientModule } from '@angular/common/http';

// 3rd party
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent

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
    HttpClientModule,
    ProfileModule,

    /**
     * third party modules
     * only those that must be installed
     * with forRoot should be defined here, all else
     * can live in shared
     */
    NgProgressModule,
    NgProgressHttpModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot(),


  ],
  providers: [MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
