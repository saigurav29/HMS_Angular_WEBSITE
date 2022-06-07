import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RestApiService } from "../restapi.service";


@Injectable({
  providedIn: 'root'
})
export class loginService {
  private loginURL:any="";
    constructor(private  restAPI:RestApiService,private http:HttpClient) { 
        this.loginURL = environment.webapibaseurl + "User/Login";
  }
  loginuser(request:any):Observable<any>{
    // return this.restAPI.getDataWithNoParam<any,StatRespDTO>("customer/getStateList.ctb","");  
    //return this.restAPI.postData( "", request);     
    return this.http.post<any>(this.loginURL,request);
   }
}
