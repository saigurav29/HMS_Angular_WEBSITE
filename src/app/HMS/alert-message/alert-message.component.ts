import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  inputdata:any;
  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AlertMessageComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      this.inputdata=data;
    } // Closing dialog window
    
     cancel() { // To cancel the dialog window
    this.dialogRef.close();
    }
    
     cancelN() { 
        this.dialog.closeAll();
    }

  ngOnInit() {
  }
}
