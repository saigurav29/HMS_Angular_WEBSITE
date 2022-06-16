import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loginService } from 'src/app/Services/ClientService/login.service';
import { AlertMessageComponent } from '../../alert-message/alert-message.component';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  empform: any|FormGroup;
  empdata:any;
  wasFormChanged = false;
  exception:boolean=false;
  empheader:any
  rolemaster:any[]=[
    {id:1,text:"Manager"},
    {id:2,text:"Captain"},
    {id:3,text:"Cheaf"}]
  public breakpoint: any|number; // Breakpoint observer code
diablefrm:any = false;
  constructor(public dialogRef: MatDialogRef<AddEditEmployeeComponent>,public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder,private empservice:loginService) {
      this.empdata = data?.data;
      this.empheader=data?.actiontype;
      console.log(this.empdata);
     }

     ngOnInit() {
       this.diablefrm = this.empheader=="View"?true:false;
      this.empform = this.fb.group({
        employname: [null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
        username: [null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
        email: [null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password:['',[Validators.required]],
        role:[null,Validators.required],
        mobile:[null,[Validators.required,Validators.pattern('[0-9]{10}')]]
      });
    if(this.empheader!="Add"){
      this.setdata();
    }
    }
    setdata(){
    this.empform.controls["employname"].setValue(this.empdata.name);
    this.empform.controls["username"].setValue(this.empdata.username);
    this.empform.controls["email"].setValue(this.empdata.emailId);
    this.empform.controls["role"].setValue(this.empdata.role);
    this.empform.controls["mobile"].setValue(this.empdata.mobile);

    }
    formChanged() {
      this.wasFormChanged = true;
    }
    saveemployee() {
      const savereq:any={
        id: this.empheader=="Edit" ? this.empdata.id:0,
        name: this.empform.controls.employname.value,
        mobile: this.empform.controls.mobile.value,
        username: this.empform.controls.username.value,
        password: this.empform.controls.password.value,
        emailId: this.empform.controls.email.value,
        role: this.empform.controls.role.value,
        isactive: false,
      }
      this.empservice.saveemployee(savereq).subscribe((rsp:any)=>{
        this.closedailog();
        const dialogRef = this.dialog.open(AlertMessageComponent, {
          width: '340px', data:{actionType:'save',employeeData:this.empheader=="Edit" ?"Employee data updated successfully.":"Employee added successfully."}
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
