import { HttpClient,HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthServiceService } from "./auth-service.service";
import { retry, catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";

import {  throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
    constructor(private http: HttpClient, 
        public authService: AuthServiceService) { }
        handleError(error: HttpErrorResponse) {
            let errorMessage = 'Unknown error!';
            if (error.error instanceof ErrorEvent) {
              // Client-side errors
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // Server-side errors
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            window.alert(errorMessage);
            return throwError(errorMessage);
          }
public sendGetRequest(apiurl:any){
    return this.http.get(environment.webapibaseurl+"/"+apiurl).pipe(retry(3), catchError(this.handleError));
  }
}