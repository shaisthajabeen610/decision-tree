import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecisionPageComponent } from './decision-page/decision-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PricingComponent } from './pricing/pricing.component';
//import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  // {
  //   path:'',pathMatch: 'full' ,redirectTo:'/cloud_central'
  // },
  {path : '', component:FirstPageComponent},
  {path: 'pricing',component:PricingComponent},
  {path:'decision-tree', component:DecisionPageComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })  
    
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
