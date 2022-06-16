import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { loginService } from 'src/app/Services/ClientService/login.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditFoodIemComponent } from './add-edit-food-iem/add-edit-food-iem.component';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {

  displayedColumns = [ 'id', 'name', 'type', 'categoryName','itemDec','price','action'];
  dataSource: any | MatTableDataSource<any>;
  selection: any| SelectionModel<any>;
  showloader:any=true;

  @ViewChild(MatPaginator, { static: true }) paginator:any| MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: any | MatSort;
  constructor(public dialog: MatDialog,private empservice:loginService) { }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(this.dataService.create100Users());
    // this.selection = new SelectionModel<UserData>(true, []);
    this.getfoodlist();
  }


  getfoodlist(){
    this.empservice.getfoodlist().subscribe((rsp:any)=>{
      this.dataSource = new MatTableDataSource(rsp);
      this.selection = new SelectionModel<any>(true, []);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.showloader=false;
    })
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  openDialog(tb:any,type:any): void {
    const dialogRef = this.dialog.open(AddEditFoodIemComponent, {
   
      height:'600px',disableClose: true,
      data: {data:tb,actiontype:type}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getfoodlist();
    });
  }

  applyFilter(filterValue: any) {
    var filterval :string = filterValue.target.value;
    this.dataSource.filter = filterval.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row:any) => this.selection.select(row));
  }

}
