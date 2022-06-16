import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEditEmployeeComponent } from 'src/app/HMS/employee/add-edit-employee/add-edit-employee.component';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { loginService } from 'src/app/Services/ClientService/login.service';
import { navMenuService } from 'src/app/Services/navMenu.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
menuList:any;
userinfo:any;
  constructor(public route:Router,private navservice:navMenuService,private authserv:AuthServiceService,
    private login : loginService,public dialog: MatDialog) {
    this.userinfo= this.authserv.getUserInfo();
    if(!this.userinfo){
      this.route.navigateByUrl("/");
    }
    
   }

  ngOnInit(): void {
    this.menuList= this.navservice.sidemenuLIst(this.userinfo.role);
  }

  openDialog(): void {
    const empid :any ={
      id:this.userinfo.id
    }
    this.login.userinfo(empid).subscribe((rsp:any)=>{
      const dialogRef = this.dialog.open(AddEditEmployeeComponent, {
       
        height:'600px',disableClose: true,
        data: {data:rsp,actiontype:"View"}
      });
    })
    
  }
  routeme(url:any){
    this.route.navigateByUrl(url);
    }
    headericonroute(){
      if(this.userinfo.role==1){
        this.route.navigateByUrl("app/dashboard");
      }else if(this.userinfo.role==2){
        this.route.navigateByUrl("app/tablebooking");

      }else if(this.userinfo.role==3){
        this.route.navigateByUrl("app/cheafmaster");
        
      }
    }
    logout(){
      const empid :any ={
        id:this.userinfo.id,
        isactive: false
      };
this.login.updatelogout(empid).subscribe((rsp:any)=>{

})
       this.authserv.clearSessionStorage();
       setTimeout(() => {
         this.route.navigateByUrl("/");
       }, 1000);
    }
}
