import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/Services/ClientService/Table.service';

@Component({
  selector: 'app-view-ordered-items',
  templateUrl: './view-ordered-items.component.html',
  styleUrls: ['./view-ordered-items.component.css']
})
export class ViewOrderedItemsComponent implements OnInit {
  orderinfo:any;
  dataSource: any | MatTableDataSource<any>;
  displayedColumns: string[] = ['itemName',  'quantity', 'price', 'itemStatus'];
  constructor(private tabserv:TableService,
    public dialogRef: MatDialogRef<ViewOrderedItemsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log(data);
      this.orderinfo = data;
    }

  ngOnInit(): void {
    this.GetOrdersByID();
  }

  GetOrdersByID(){
    const ordidinfo :any={orderId:this.orderinfo?.orderID}
    console.log(ordidinfo);
   this.tabserv.GetOrdersByID(ordidinfo).subscribe((res:any)=>{
    this.dataSource = new MatTableDataSource(res);
   })
 }
 public sum(key: any) {
  return this.dataSource?.data.reduce((a:any, b:any) => a + (Number(b[key]) || 0), 0);
}
closedailog(){
  this.dialogRef.close();
}
}
