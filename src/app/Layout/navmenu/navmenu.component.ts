import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navMenuService } from 'src/app/Services/navMenu.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
menuList:any;
  constructor(public route:Router,private navservice:navMenuService) {
    this.menuList= this.navservice.sidemenuLIst(1);
   }

  ngOnInit(): void {
  }


  routeme(url:any){
    this.route.navigateByUrl(url);
    }
}
