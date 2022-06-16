import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/Services/ClientService/Table.service';
import {MatDialog} from '@angular/material/dialog';
import { PlaceorderComponent } from './placeorder/placeorder.component';

export interface tabledata{
  tableId: any,
  isactive: any,
  tableName:any,
  empid: any,
  tableStatus: any,
  tableorderDetails:any[],
}
@Component({
  selector: 'app-table-bookings',
  templateUrl: './table-bookings.component.html',
  styleUrls: ['./table-bookings.component.css']
})
export class TableBookingsComponent implements OnInit {
tablesdata:tabledata[]=[];
  constructor(private tableserv:TableService,public dialog: MatDialog) { }
  showloader:any=true;

  ngOnInit(): void {
    this.gettableData();
  }

  gettableData(){
this.tableserv.getTabledata().subscribe((rsp:any)=>{
  this.tablesdata=rsp;
  this.getbookingTableorders();
})
  }
  openDialog(tb:any): void {
    const dialogRef = this.dialog.open(PlaceorderComponent, {
      height:'600px',
      data: tb,
    });
    // width: '70%',
    // height:'600px',
    dialogRef.afterClosed().subscribe(result => {
    this.gettableData();
    });
  }

  getbookingTableorders(){
    this.tableserv.gettablebookedoreds().subscribe((rsp:any)=>{
      for (let index = 0; index < this.tablesdata.length; index++) {
        if(this.tablesdata[index].tableStatus=="B"){
          const tbl :any = rsp.filter((x:any)=>x.tableId==this.tablesdata[index].tableId);
          this.tablesdata[index].tableorderDetails = tbl;
        }
      }
      this.showloader=false;
    })
  }
 
}

