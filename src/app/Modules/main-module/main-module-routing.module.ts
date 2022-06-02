import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from 'src/app/Layout/main-component/main-component.component';

const routes: Routes = [
{path:"",component:MainComponentComponent},
{path:"dashboard",component:MainComponentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
