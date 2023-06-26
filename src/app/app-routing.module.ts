import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubTileControllerComponent } from './Components/sub-tile-controller/sub-tile-controller.component';
import { MarketplaceComponent } from './Components/marketplace/marketplace.component';

const routes: Routes = [
  {path: 'subscriptions', component: SubTileControllerComponent},
  {path: 'marketplace', component: MarketplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
