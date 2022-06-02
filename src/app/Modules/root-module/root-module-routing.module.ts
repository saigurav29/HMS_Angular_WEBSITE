import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/Layout/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
 {path:"dashboard",loadChildren: () => import('../main-module/main-module.module').then(m => m.MainModuleModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootModuleRoutingModule { }
