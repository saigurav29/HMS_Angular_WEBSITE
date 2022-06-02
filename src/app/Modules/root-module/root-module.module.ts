import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootModuleRoutingModule } from './root-module-routing.module';
import { LoginComponent } from 'src/app/Layout/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RootModuleRoutingModule
  ]
})
export class RootModuleModule { }
