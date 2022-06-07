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
  loginform:any;

  constructor(public route:Router,private loginservice :loginService,private authserv:AuthServiceService) {

   }

  ngOnInit(): void {
  this.loginform = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })
  }


  loginme(){
    if(this.loginform.invalid){
      alert("Please enter login details.");
      return;
    }else{
      const loginreq:any={
        username: this.loginform.controls["username"].value,
        password: this.loginform.controls["password"].value
      }
      this.loginservice.loginuser(loginreq).subscribe((retn:any)=>{
        if(retn !=null){
          this.authserv.setUserInfo(retn[0]);
          this.route.navigateByUrl("app/dashboard");
          console.log(this.authserv.getUserInfo());
        }else{
          alert("Please enter valid login details.");
        }
      });
    }

  }
}
