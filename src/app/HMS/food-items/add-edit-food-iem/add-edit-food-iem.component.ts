import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableService } from 'src/app/Services/ClientService/Table.service';
import { AlertMessageComponent } from '../../alert-message/alert-message.component';

@Component({
  selector: 'app-add-edit-food-iem',
  templateUrl: './add-edit-food-iem.component.html',
  styleUrls: ['./add-edit-food-iem.component.css']
})
export class AddEditFoodIemComponent implements OnInit {

  foodform: any|FormGroup;
  foodData:any;
  wasFormChanged = false;
  exception:boolean=false;
  empheader:any
  category:any[]=[
    {id:1,text:"Soups"},
    {id:2,text:"Starters"},
    {id:3,text:"Main Course"},
    {id:4,text:"Dessert"}]
    itemtype:any[]=[
      {id:1,text:"Veg"},
      {id:2,text:"Non-Veg"}]
  public breakpoint: any|number; // Breakpoint observer code

  constructor(public dialogRef: MatDialogRef<AddEditFoodIemComponent>,public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder,private tblservice:TableService) {
      this.foodData = data?.data;
      this.empheader=data?.actiontype;
      console.log(data);
     }

     ngOnInit() {
      this.foodform = this.fb.group({
        foodname: [null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
        itemdesc: [null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
        category: [null, [Validators.required, ]],
        itemtype:[null,[Validators.required]],
        price:[null,[Validators.required]]
      });
    if(this.empheader=="Edit"){
      this.setdata();
    }
    }
    setdata(){
    this.foodform.controls["foodname"].setValue(this.foodData.itemName);
    this.foodform.controls["itemdesc"].setValue(this.foodData.itemDec);
    this.foodform.controls["category"].setValue(this.foodData.categoryId);
    this.foodform.controls["itemtype"].setValue(this.foodData.itemType);
    this.foodform.controls["price"].setValue(this.foodData.price);

    }
    formChanged() {
      this.wasFormChanged = true;
    }
    savefoodItem() {
      const savereq:any={
        id: this.empheader=="Edit" ? this.foodData.itemId:0,
        itemName: this.foodform.controls.foodname.value,
        itemType: this.foodform.controls.itemtype.value,
        price: this.foodform.controls.price.value,
        itemDec: this.foodform.controls.itemdesc.value,
        categoryId: this.foodform.controls.category.value
      }
      this.tblservice.savefoodItem(savereq).subscribe((rsp:any)=>{
        this.closedailog();
        const dialogRef = this.dialog.open(AlertMessageComponent, {
          width: '340px', data:{actionType:'save',employeeData:this.empheader=="Edit" ?"Food data updated successfully.":"Food Item added successfully."}
        });
      })

    }
    closedailog() {
   this.dialogRef.close();
    }
roleselected:any
    changerole(event:any){
    }

}
