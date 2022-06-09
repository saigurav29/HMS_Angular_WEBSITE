import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RestApiService } from "../restapi.service";


@Injectable({
  providedIn: 'root'
})
export class dashboardService{
    private dashboardurl:any="";
    private getemployeedet:any="";
    private ongoingurl:any="";
    constructor(private  restAPI:RestApiService,private http:HttpClient) { 
        this.dashboardurl = environment.webapibaseurl + "Orders/GetCompletedCount";
        this.getemployeedet =environment.webapibaseurl+"User/GetLoginMasters";
        this.ongoingurl = environment.webapibaseurl+"Orders/GetpendingOrders";
  }
  getdashboarddata():Observable<any>{  
    return this.http.get<any>(this.dashboardurl);
   }
   getemployeeDetails(){
       return this.http.get<any>(this.getemployeedet);
   }
   getongoingOrders(){
    return this.http.get<any>(this.ongoingurl);
   }
}