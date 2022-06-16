import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/Services/ClientService/Table.service';

@Component({
  selector: 'app-cheafmonitor',
  templateUrl: './cheafmonitor.component.html',
  styleUrls: ['./cheafmonitor.component.css']
})
export class CheafmonitorComponent implements OnInit {
  displayedColumns: string[] = ['itemName',  'tablename', 'itemstatus','action'];
  dataSource:any;
  constructor(private tabserv:TableService, ) { }
id:any;
showloader:any=true;

  ngOnInit(): void {
    this.getcheafordersItems();
    this.id = setInterval(() => {
      this.getcheafordersItems(); 
    }, 10000);
  }
  getcheafordersItems(){
    this.tabserv.getcheafordersItems().subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res);
      this.showloader=false;
    })
  }
  updateorder(item:any){
    const iteminfo:any={
      itemID:item.itemID
    }
    this.tabserv.updatecheaforderstatus(iteminfo).subscribe((res:any)=>{
      this.getcheafordersItems();
    })
    
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
