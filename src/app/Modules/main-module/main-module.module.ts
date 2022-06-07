import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainComponentComponent } from 'src/app/Layout/main-component/main-component.component';
import { NavmenuComponent } from 'src/app/Layout/navmenu/navmenu.component';
import { DashboardComponent } from 'src/app/HMS/dashboard/dashboard.component';
import { EmployeeComponent } from 'src/app/HMS/employee/employee.component';
import { TableBookingsComponent } from 'src/app/HMS/table-bookings/table-bookings.component';
import { OrdesListComponent } from 'src/app/HMS/ordes-list/ordes-list.component';
import { FoodItemsComponent } from 'src/app/HMS/food-items/food-items.component';


@NgModule({
  declarations: [MainComponentComponent,NavmenuComponent,
    DashboardComponent,
    EmployeeComponent,
    TableBookingsComponent,
    OrdesListComponent,
    FoodItemsComponent],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MainModuleModule { }
