import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubTileControllerComponent } from './Components/sub-tile-controller/sub-tile-controller.component';

const routes: Routes = [
  {path: 'subscriptions', component: SubTileControllerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
