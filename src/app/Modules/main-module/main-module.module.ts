import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainComponentComponent } from 'src/app/Layout/main-component/main-component.component';
import { NavmenuComponent } from 'src/app/Layout/navmenu/navmenu.component';


@NgModule({
  declarations: [MainComponentComponent,NavmenuComponent],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
