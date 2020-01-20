import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsAndConditionsComponent } from './static-pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './static-pages/privacy-policy/privacy-policy.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
  },

];

// const routes: Routes = [
//   {
//     path: '',
//     canActivate: [HasToken],
//     resolve: {
//       baseResolve: BaseResolve,
//     },
//     children: [
//       { path: '', redirectTo: '/home', pathMatch: 'full' },
//       { path: 'home', component: BiPiHomeComponent },
//       { path: 'contact-us', component: BipiContactusComponent },
//       { path: 'help', component: BipiHelpComponent },
//       { path: 'privacy-policy', component: BipiPrivacyPolicyComponent },
//       { path: 'copyright-information', component: BipiCopyrightInformationComponent },
//       {
//         path: 'profile',
//         loadChildren: './profile/profile.module#ProfileModule',
//         canActivate: [isProfiledUser],
//       },
//       {
//         path: 'support',
//         component: SupportComponent,
//       },
//       {
//         path: 'faq',
//         component: FaqComponent,
//       },
//       {
//         path: 'terms-and-conditions',
//         component: TermsAndConditionsComponent,
//       },
//       {
//         path: 'products',
//         loadChildren: './product/product.module#ProductsModule',
//       },
//       {
//         path: 'admin',
//         loadChildren: './admin/admin.module#AdminModule',
//       },
//       { path: '', loadChildren: './checkout/checkout.module#CheckoutModule' },
//       { path: 'impersonation', redirectTo: '/home' },
//       {
//         path: 'quick-facts-search',
//         component: BipiQuickFactsSearchComponent
//       }
//     ],
//     runGuardsAndResolvers: 'always'
//   },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
