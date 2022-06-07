import { HttpClient,HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthServiceService } from "./auth-service.service";
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from "src/environments/environment";

import {  Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
    constructor(private http: HttpClient, 
        public authService: AuthServiceService) { }
        private authorizationHeader: any ;

        private getHttpHeaderWithAuthorization() {
          //"Access-Control-Allow-Origin":"*",   
          this.authorizationHeader = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ''
          });
      }
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
  
postData(webapiUrl: string, input: any): Observable<any> {
  this.getHttpHeaderWithAuthorization();
  return this.http.post(environment.webapibaseurl + webapiUrl, input, { headers: this.authorizationHeader }).pipe(
    retry(3), catchError(this.handleError),
      map((data: any) => {                
          return data;
      })
  );
}

}