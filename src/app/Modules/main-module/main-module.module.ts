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
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule} from "@angular/material/progress-bar";
import { MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StatComponent } from 'src/app/HMS/dashboard/stat/stat.component';
import { DataService } from 'src/app/Services/data.service';
import { PlaceorderComponent } from 'src/app/HMS/table-bookings/placeorder/placeorder.component';
import { StepperComponent } from 'src/app/HMS/table-bookings/stepper/stepper.component';
import { CheafmonitorComponent } from 'src/app/HMS/cheafmonitor/cheafmonitor.component';
import { BillprintComponent } from 'src/app/HMS/table-bookings/billprint/billprint.component';
import { AddEditEmployeeComponent } from 'src/app/HMS/employee/add-edit-employee/add-edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertMessageComponent } from 'src/app/HMS/alert-message/alert-message.component';
import { AddEditFoodIemComponent } from 'src/app/HMS/food-items/add-edit-food-iem/add-edit-food-iem.component';
import { ViewOrderedItemsComponent } from 'src/app/HMS/ordes-list/view-ordered-items/view-ordered-items.component';
import { UserinfoComponent } from 'src/app/Layout/userinfo/userinfo.component';
import { LoaderComponent } from 'src/app/Layout/loader/loader.component';
const materialModules = [
  CdkTreeModule,
//Mat Form Controls
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,

//Material Navigatin
MatMenuModule,
MatSidenavModule,
MatToolbarModule,
//Material layout
MatCardModule,
MatExpansionModule,
MatGridListModule,
// Material Buttons & Indicators

  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
//material popups & modules
MatBottomSheetModule,
MatDialogModule,
MatTooltipModule,

//material Data Tables
MatPaginatorModule,
MatSortModule,
MatTableModule,
MatSelectModule,
MatTabsModule,
MatListModule,

  MatDividerModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
];

@NgModule({
  declarations: [MainComponentComponent,NavmenuComponent,
    UserinfoComponent,
    DashboardComponent,
    StatComponent,
    EmployeeComponent,
    TableBookingsComponent,
    OrdesListComponent,
    FoodItemsComponent,
    StepperComponent,
    CheafmonitorComponent,
    PlaceorderComponent,
    AddEditEmployeeComponent,
    AlertMessageComponent,
    AddEditFoodIemComponent,
    ViewOrderedItemsComponent,
    LoaderComponent,
    BillprintComponent,],
  imports: [
    CommonModule,
    ...materialModules,
    MainModuleRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports:[...materialModules,AlertMessageComponent,LoaderComponent],
  providers: [DataService]
})
export class MainModuleModule { }
