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
  private employeListurl:any="";
private saveurl:any="";
    constructor(private  restAPI:RestApiService,private http:HttpClient) { 
        this.loginURL = environment.webapibaseurl + "User/Login";
        this.employeListurl = environment.webapibaseurl +"User/GetLoginMasters";
        this.saveurl = environment.webapibaseurl +"User/SaveUser";

  }
  loginuser(request:any):Observable<any>{  
    return this.http.post<any>(this.loginURL,request);
   }

   getemployelist():Observable<any>{  
    return this.http.get<any>(this.employeListurl);
    
   }
   saveemployee(empdata:any):Observable<any>{  
    return this.http.post<any>(this.saveurl,empdata);
    
   }
}
