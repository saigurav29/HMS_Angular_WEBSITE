import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class navMenuService {

  constructor() { }

  sidemenuLIst(role:any){
      let NavItem:any =[];
      switch (role) {
          case 1:
            NavItem = [
                {
                  displayName: 'Dashboard',
                  route: 'app/dashboard'
                },
                {
                  displayName: 'Order List',
                  route: 'app/orderlist'
                },
                {
                  displayName: 'Table Booking',
                  route: 'app/tablebooking'
                },
                {
                  displayName: 'Employee',
                  route: 'app/employee',
                },
                {
                  displayName: 'Food Items',
                  route: 'app/fooditem',
                },
                {
                  displayName: 'Cheaf Monitor',
                  route: 'app/fooditem',
                }
              ];
              break;
              case 2:
            NavItem = [
                {
                  displayName: 'Table Booking',
                  route: 'app/tablebooking'
                }
              ];
              break;
              case 3:
            NavItem = [
                {
                    displayName: 'Cheaf Monitor',
                    route: 'app/fooditem',
                  }
              ];
              break; 
      
          default:
              break;
      }
     
    return NavItem;
  }
}
