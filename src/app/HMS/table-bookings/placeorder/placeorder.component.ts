import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TableService } from 'src/app/Services/ClientService/Table.service';


@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
orderdata:any;
counterValue:any=0;
orderID:any  =0;
tableid:any;
empinfo:any;
tablestatus:any;
  constructor(private tabserv:TableService, private auth:AuthServiceService,
    public dialogRef: MatDialogRef<PlaceorderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.empinfo = this.auth.getUserInfo();
      console.log(data);
      this.tablestatus = data?.tableStatus;
      if(Object.keys(data).includes("tableorderDetails")){
        this.orderID = data?.tableorderDetails[0].orderID;
        this.tableid = data?.tableId;
        this.orderdata = data?.tableorderDetails.length>0? data?.tableorderDetails[0]?.orderDetails:[];
      }else{
        this.orderdata=[];
        this.orderID =0;
        this.tableid = data?.tableId;
      }
     }
  displayedColumns: string[] = ['itemName',  'quantity', 'price', 'itemStatus'];
  dataSource:any;
  dataFoodItemSource:any;
  displayFoodItemHeader:string[]=['type','itemname','category','price','action'];//'itemdesc',
  ngOnInit(): void {
    this.getFoodItems();
    this.dataSource = new MatTableDataSource(this.orderdata);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataFoodItemSource.filter = filterValue.trim().toLowerCase();
  }
fooditemDataTemp:any;
  getFoodItems(){
    this.tabserv.getFoodItems().subscribe((res:any)=>{
      res= res.map((v:any)=>({...v,counter:0}));
      this.fooditemDataTemp=res;
      this.dataFoodItemSource = new MatTableDataSource(res);
    })
  }
  public sum(key: any) {
    return this.dataSource.data.reduce((a:any, b:any) => a + (Number(b[key]) || 0), 0);
  }
  placeorders(){
    var getplacedlist = this.fooditemDataTemp.filter((x:any)=>x.counter>0);
    console.log(getplacedlist);
    const placeorderlist:any[]=[];
    for (let i = 0; i < getplacedlist.length; i++) {
     let tmporddata:any={
       orderId:this.orderID,
       tableID:this.tableid,
       employeID:this.empinfo?.id,
       orderstatus:"P",
       itemName:getplacedlist[i].itemName,
       itemID:getplacedlist[i].itemId,
       itemstatus:"P",
       itemprice:getplacedlist[i].price,
       counter:getplacedlist[i].counter
     }
     placeorderlist.push(tmporddata);
    }
    this.tabserv.placeOrders(placeorderlist).subscribe((res:any)=>{
      console.log(res);
      this.dialogRef.close();
    });
  }
  finalize(){
    var orinfo:any ={orderId:this.orderID}
    this.tabserv.filnalizeOrder(orinfo).subscribe((res:any)=>{
      console.log(res);
      this.dialogRef.close();
    });
  }
  Reservetable(){
    var tablresv:any ={       tableID:this.tableid    }
    this.tabserv.Reservetable(tablresv).subscribe((res:any)=>{
      console.log(res);
      this.dialogRef.close();
    });
  }
  selectedQuantity(data:any){
    var getdata = this.fooditemDataTemp.findIndex((x:any)=>x.itemId==data.itemId);
    this.fooditemDataTemp[getdata].counter=data.counter;
  }
}