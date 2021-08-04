import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'land-page',
    pathMatch: 'full'
  },
  {
    path: 'land-page',
    loadChildren: () => import('./land-page/land-page.module')
      .then(m => m.LandPageModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
