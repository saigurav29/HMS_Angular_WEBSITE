import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestApiService } from "../restapi.service";


@Injectable({
  providedIn: 'root'
})
export class loginService {
  constructor(private  restAPI:RestApiService,private http:HttpClient) { }
  loginuser(request:any):Observable<any>{
    // return this.restAPI.getDataWithNoParam<any,StatRespDTO>("customer/getStateList.ctb","");  
    return this.restAPI.postData( "User/Login", request);     
   }
}
