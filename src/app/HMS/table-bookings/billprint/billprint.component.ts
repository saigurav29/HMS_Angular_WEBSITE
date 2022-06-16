import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TableService } from 'src/app/Services/ClientService/Table.service';
import { AlertMessageComponent } from '../../alert-message/alert-message.component';

@Component({
  selector: 'app-billprint',
  templateUrl: './billprint.component.html',
  styleUrls: ['./billprint.component.css']
})
export class BillprintComponent implements OnInit {
  orderinfo:any;
  orderlist:any
  constructor(private tabserv:TableService, 
    public dialogRef: MatDialogRef<BillprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,) { 
      console.log(data);
      this.orderinfo = data;
    }
datetime:any =new Date().toDateString();
  ngOnInit(): void {
    this.GetOrdersByID();
  }
toalamout:number=0;
  GetOrdersByID(){
     const ordidinfo :any={orderId:this.orderinfo?.orderId}
     console.log(ordidinfo);
    this.tabserv.GetOrdersByID(ordidinfo).subscribe((res:any)=>{
     this.orderlist= res;
     console.log(res);
      for (let i = 0; i < res.length; i++) {
       this.toalamout = this.toalamout + res[i].price;
        
      }

    })
  }

    finalize(){
    var orinfo:any ={orderId:this.orderinfo?.orderId}
    this.tabserv.filnalizeOrder(orinfo).subscribe((res:any)=>{
      // let printContents:any = document.getElementById("printbill");
    
      // var mywindow:any = window.open('', 'PRINT', 'height=400,width=600');

      // mywindow.document.write(printContents.innerHTML);
  
      // mywindow.document.close(); // necessary for IE >= 10
      // mywindow.focus(); // necessary for IE >= 10*/
  
      // mywindow.print();
     
 
      //window.print();
      this.dialogRef.close();
      const dialogRef = this.dialog.open(AlertMessageComponent, {
        width: '340px', data:{actionType:'print',employeeData:"Order Completed Successfully."}
      });
    });
  }

}
