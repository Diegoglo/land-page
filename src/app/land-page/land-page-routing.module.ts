import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopPageComponent } from './desktop-page/desktop-page.component';
import { CoffeComponent} from './components/coffe/coffe.component';
import { NaveComponent} from './components/nave/nave.component'

const routes: Routes = [
  {
    path:'',
    component: NaveComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandPageRoutingModule { }
