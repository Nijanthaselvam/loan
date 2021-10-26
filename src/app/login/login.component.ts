import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  register(name:string,pnumber:string,password:string,cpassword:string){
    if(password != cpassword){
      alert("Password should be same");
      return;
    }
    localStorage.setItem("name",name);
    localStorage.setItem("phonenumber",pnumber);
    localStorage.setItem("pass",password);
    localStorage.setItem("cpass",cpassword);
  }

  login(name:string,pass:string){
    
    if(name != String(localStorage.getItem("name"))){
      alert("wrong name");
      return;
    }
    if(pass != localStorage.getItem("pass")){
      alert("wrong Password");
      return;
    }
    alert("Logged in");
    
  }
}
