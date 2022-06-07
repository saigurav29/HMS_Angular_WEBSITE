// import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError, TimeoutError } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { AuthServiceService } from '../Services/auth-service.service';
// import { map, timeout, catchError } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root'
// })
// export class RestApiService {
//   private authorizationHeader: HttpHeaders = null;
//   private authorizationHeaderreport : HttpHeaders = null;
//   constructor(private http: HttpClient, public authService: AuthServiceService) { }
//   private getHttpHeaderWithAuthorization() {
//     //"Access-Control-Allow-Origin":"*",   
//     this.authorizationHeader = new HttpHeaders({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': ''
//     });
// }
// private getHttpHeaderWithAuthorizationforreport() {
//     //"Access-Control-Allow-Origin":"*",   
//     this.authorizationHeaderreport = new HttpHeaders({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': '',
//         'responseType': 'blob'
//     });
// }

// postData<I, O>(webapiUrl: string, input: I): Observable<O> {
//   this.getHttpHeaderWithAuthorization();
//   return this.http.post(environment.webapibaseurl + webapiUrl, input, { headers: this.authorizationHeader }).pipe(
//       timeout(environment.apicalltimeout),
//       catchError((error) => this.handleErrorResponse(error, "apidown")),
//       map((data: O) => {                
//           return data;
//       })
//   );
// }


// downloadFIle<I, O>(webapiUrl: string, input: I): Observable<Blob> {
//     this.getHttpHeaderWithAuthorizationforreport();
//     return this.http.post(environment.webapibaseurl + webapiUrl, input, {responseType: 'blob' }).pipe(
//         timeout(environment.apicalltimeout),
//         catchError((error) => this.handleErrorResponse(error, "apidown")),
//         map((data: Blob) => {                
//             return data;
//         })
//     );
//   }

// getData<I, O>(webapiUrl: string, input: I): Observable<O> {
//   this.getHttpHeaderWithAuthorization();
//   return this.http.get(environment.webapibaseurl + webapiUrl  + "/" + input, { headers: this.authorizationHeader }).pipe(
//       timeout(environment.apicalltimeout),
//       catchError((error) => this.handleErrorResponse(error, "apidown")),
//       map((data: O) => {
//           return data;
//       })
//   );
// }


// getDataWithNoParam<I, O>(webapiUrl: string,input: I): Observable<O> {
//     this.getHttpHeaderWithAuthorization();
//     return this.http.get(environment.webapibaseurl + webapiUrl , { headers: this.authorizationHeader }).pipe(
//         timeout(environment.apicalltimeout),
//         catchError((error) => this.handleErrorResponse(error, "apidown")),
//         map((data: O) => {
//             return data;
//         })
//     );
//   }




// // handleErrorResponse(errorResponse:any, source: string): Observable<HttpEvent<string>> {
// // if (errorResponse instanceof TimeoutError) {
// //     if (source == "apidown")
// //         return throwError('API is down. Please try it later.');
// //     else if (source == "")
// //         return throwError('Someting went wrong. Please try it later');
// // }
// // else {
// //     if (errorResponse.status === 401) {
// //       //  this.authService.clearLocalStorage();
// //         this.authService.clearSessionStorage();
// //         this.authService.startAuthentication();
// //     }
// //    return throwError('Error Status ' + errorResponse.status + ', Someting went wrong. Please try it later!');
   
// // }

// // }
// }
