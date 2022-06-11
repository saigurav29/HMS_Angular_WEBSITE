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
      width: '70%',
      height:'600px',
      data: tb,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
      console.log(this.tablesdata);
    })
  }
}

