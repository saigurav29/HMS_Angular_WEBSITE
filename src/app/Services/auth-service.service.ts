import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  public userInfo: any={} ;
  public IslogedIn:boolean=false; 

  setUserInfo(token:any){
    this.IslogedIn = true;
    sessionStorage.setItem("userInfo",JSON.stringify(token));
}
getUserInfo(){
  if(sessionStorage.getItem("userInfo")){
    let sess:any = sessionStorage.getItem("userInfo");
      this.userInfo= JSON.parse(sess);
      this.IslogedIn = true;
      return this.userInfo;
  }
  else{
      return false;
  }
}



// startAuthentication(): Promise<void> {
//   return null; //this.manager.signinRedirect();
// }



// clearLocalStorage() {
//   for (var i = 0; i < localStorage.length; i++) {
//       if (localStorage.key(i).includes("userInfo")) {
//           const idTokenLocal = localStorage.key(i);
//           localStorage.removeItem(idTokenLocal);
//           break;
//       }
//   }
// }
// clearSessionStorage() {
//   for (var i = 0; i < sessionStorage.length; i++) {
//       if (sessionStorage.key(i).includes("userInfo")) {
//           const idTokenLocal = sessionStorage.key(i);
//           sessionStorage.removeItem(idTokenLocal);
//           break;
//       }
//   }
// }
}
