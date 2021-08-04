import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopPageComponent } from './desktop-page/desktop-page.component';

const routes: Routes = [
  {
    path:'',
    component: DesktopPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandPageRoutingModule { }
