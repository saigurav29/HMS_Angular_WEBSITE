import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }


  routeme(url:any){
    this.route.navigateByUrl(url);
      }
}
