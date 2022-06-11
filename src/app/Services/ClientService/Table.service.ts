import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RestApiService } from "../restapi.service";


@Injectable({
  providedIn: 'root'
})
export class TableService{
    private tabledata:any="";
    private tablebookingdetails:any="";
    private fooditems:any="";
private placeorderurl:any="";
private finalizeorderurl:any="";
private reservtableurl:any="";

    constructor(private  restAPI:RestApiService,private http:HttpClient) { 
        this.tabledata = environment.webapibaseurl + "Orders/getTableData";
        this.tablebookingdetails=environment.webapibaseurl+ "Orders/getBookingTableorderDetails";
        this.fooditems=environment.webapibaseurl+"Orders/getfoodItemsList";
        this.placeorderurl = environment.webapibaseurl+"Orders/placeOrderforTable";
        this.finalizeorderurl = environment.webapibaseurl+"Orders/fishorder";
        this.reservtableurl = environment.webapibaseurl+"Orders/Reservetable";


  }
  getTabledata():Observable<any>{  
    return this.http.get<any>(this.tabledata);
   }
   gettablebookedoreds():Observable<any>{  
    return this.http.get<any>(this.tablebookingdetails);
   }
   getFoodItems():Observable<any>{  
    return this.http.get<any>(this.fooditems);
   }
    placeOrders(orderdata:any):Observable<any>{  
    return this.http.post<any>(this.placeorderurl,orderdata);
   }
   filnalizeOrder(orderid:any):Observable<any>{  
    return this.http.post<any>(this.finalizeorderurl,orderid);
   }
   Reservetable(reservtabl:any):Observable<any>{  
    return this.http.post<any>(this.reservtableurl,reservtabl);
   }
}