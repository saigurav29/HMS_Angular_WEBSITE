import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from 'src/app/Services/ClientService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router,private loginservice :loginService) { }

  ngOnInit(): void {
  }

  loginme(){
this.route.navigateByUrl("app/dashboard");
const loginreq:any={
  username: "saigurav",
  password: "saigurav@29"
}
this.loginservice.loginuser(loginreq).subscribe((retn:any)=>{
console.log(retn);
});
  }
}
