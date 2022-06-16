import { Component, OnInit } from '@angular/core';
import { dashboardService } from 'src/app/Services/ClientService/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashService:dashboardService) { }
  currenMonthSales: any;
  loginEmp: any ;
  todaysOrder: any;
  todaysongoingOrder: any;
  totalEmp: any;
emplist:any;
ongoingOrders:any;

showloader:any=true;
  ngOnInit(): void {
    this.getDashboarddata();
    this.getemployeeList();
    this.getongoingOrders();
  }

  getDashboarddata(){
    this.dashService.getdashboarddata().subscribe((retn:any)=>{
      this.currenMonthSales = retn.currenMonthSales;
      this.loginEmp =   retn.loginEmp;
      this.todaysOrder = retn.todaysOrder;
      this.todaysongoingOrder = retn.todaysongoingOrder;
      this.totalEmp = retn.totalEmp;
    });
  }
  getemployeeList(){
    this.dashService.getemployeeDetails().subscribe((rsp:any)=>{
this.emplist=rsp;
    });
  }
  getongoingOrders(){
    this.dashService.getongoingOrders().subscribe((rsp:any)=>{
this.ongoingOrders=rsp;
this.showloader=false;
    });
  }

}
