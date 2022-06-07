import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { navMenuService } from 'src/app/Services/navMenu.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
menuList:any;
userinfo:any;
  constructor(public route:Router,private navservice:navMenuService,private authserv:AuthServiceService) {
    this.userinfo= this.authserv.getUserInfo();
    if(this.userinfo==null){
      this.route.navigateByUrl("/");
    }
    
   }

  ngOnInit(): void {
    this.menuList= this.navservice.sidemenuLIst(this.userinfo.role);
  }


  routeme(url:any){
    this.route.navigateByUrl(url);
    }
}
