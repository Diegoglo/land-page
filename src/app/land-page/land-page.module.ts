import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopPageComponent } from './desktop-page/desktop-page.component';
import {LandPageRoutingModule} from './land-page-routing.module';

const components = [
  DesktopPageComponent
  
];

const material = [
  
];

@NgModule({
  declarations: [...components],
  imports: [
    LandPageRoutingModule,  
  ],
  providers: [],
})
export class LandPageModule { }
