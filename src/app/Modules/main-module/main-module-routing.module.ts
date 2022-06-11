import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheafmonitorComponent } from 'src/app/HMS/cheafmonitor/cheafmonitor.component';
import { DashboardComponent } from 'src/app/HMS/dashboard/dashboard.component';
import { EmployeeComponent } from 'src/app/HMS/employee/employee.component';
import { FoodItemsComponent } from 'src/app/HMS/food-items/food-items.component';
import { OrdesListComponent } from 'src/app/HMS/ordes-list/ordes-list.component';
import { TableBookingsComponent } from 'src/app/HMS/table-bookings/table-bookings.component';
import { MainComponentComponent } from 'src/app/Layout/main-component/main-component.component';

const routes: Routes = [
{path:"",component:MainComponentComponent,
children:[
  {path:"dashboard",component:DashboardComponent},
  {path:"tablebooking",component:TableBookingsComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"orderlist",component:OrdesListComponent},
  {path:"fooditem",component:FoodItemsComponent},
  {path:"cheafmaster",component:CheafmonitorComponent}

]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
