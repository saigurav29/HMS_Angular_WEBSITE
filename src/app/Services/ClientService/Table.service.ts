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
private getcheafOrdersURL:any="";
private updateorderStatus:any="";
private GetOrdersByIDURL:any="";
private getorderListurl:any="";
private savefoodurl:any="";

    constructor(private  restAPI:RestApiService,private http:HttpClient) { 
        this.tabledata = environment.webapibaseurl + "Orders/getTableData";
        this.tablebookingdetails=environment.webapibaseurl+ "Orders/getBookingTableorderDetails";
        this.fooditems=environment.webapibaseurl+"Orders/getfoodItemsList";
        this.placeorderurl = environment.webapibaseurl+"Orders/placeOrderforTable";
        this.finalizeorderurl = environment.webapibaseurl+"Orders/fishorder";
        this.reservtableurl = environment.webapibaseurl+"Orders/Reservetable";
        this.getcheafOrdersURL = environment.webapibaseurl+"FoodItems/GetCheaforders";
        this.updateorderStatus = environment.webapibaseurl+"FoodItems/updateItemStatus";
        this.GetOrdersByIDURL = environment.webapibaseurl+"Orders/GetpendingOrdersByID";
        this.getorderListurl = environment.webapibaseurl+"Orders/getallOrdersList";
        this.savefoodurl = environment.webapibaseurl+"FoodItems/InserUpdateFoodItem";
        
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
   getcheafordersItems():Observable<any>{  
    return this.http.get<any>(this.getcheafOrdersURL);
   }
   updatecheaforderstatus(orderiteminfo:any):Observable<any>{  
    return this.http.post<any>(this.updateorderStatus,orderiteminfo);
   }
   GetOrdersByID(orderinfo:any):Observable<any>{  
    return this.http.post<any>(this.GetOrdersByIDURL,orderinfo);
   }
   getorderlistlist():Observable<any>{  
    return this.http.post<any>(this.getorderListurl,null);
   }
   savefoodItem(frmdata:any):Observable<any>{  
    return this.http.post<any>(this.savefoodurl,frmdata);
   }
}