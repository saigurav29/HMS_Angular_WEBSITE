import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { loginService } from 'src/app/Services/ClientService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router,private loginservice :loginService,private authserv:AuthServiceService) {

   }

  ngOnInit(): void {
  }

  public loginValid = true;
  public username = '';
  public password = '';

  public onSubmit(): void {
    this.loginValid = true;
    const loginreq:any={
      username: this.username,
      password: this.password
    }
    this.loginservice.loginuser(loginreq).subscribe((retn:any)=>{
      if(retn !=null){
        this.authserv.setUserInfo(retn[0]);
        if(retn[0].role==1){
          this.route.navigateByUrl("app/dashboard");
        }else if(retn[0].role==2){
          this.route.navigateByUrl("app/tablebooking");

        }else if(retn[0].role==3){
          this.route.navigateByUrl("app/cheafmaster");
          
        }
        console.log(this.authserv.getUserInfo());
      }else{
        this.loginValid=false;
      }
    });
  }

}
