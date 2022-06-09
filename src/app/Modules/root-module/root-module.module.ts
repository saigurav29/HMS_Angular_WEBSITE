import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootModuleRoutingModule } from './root-module-routing.module';
import { LoginComponent } from 'src/app/Layout/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    RootModuleRoutingModule
  ]
})
export class RootModuleModule { }
