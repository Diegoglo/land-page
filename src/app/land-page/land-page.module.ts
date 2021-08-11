import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DesktopPageComponent } from './desktop-page/desktop-page.component';
import {LandPageRoutingModule} from './land-page-routing.module';
import { CoffeComponent } from './components/coffe/coffe.component';
import { NaveComponent } from './components/nave/nave.component';

const components = [
  DesktopPageComponent
  
];

const material = [
  
];

@NgModule({
  declarations: [...components, CoffeComponent, NaveComponent],
  imports: [
    LandPageRoutingModule,
  ],
  providers: [],
})
export class LandPageModule { }
