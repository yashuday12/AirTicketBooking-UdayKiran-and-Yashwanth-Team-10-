import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   errorOccured!:boolean;
  constructor(private service:LoginService, private route:Router){}
  
  login(data:any){
    this.service.getToken(data.form.value).subscribe((token)=>{
     if(token){
      // sessionStorage.setItem("jwttoken", token.toString());
      this.service.setToken(token);
      console.log(this.service.getjwtToken());
      this.service.setAuthenticationStatus(true);
      this.service.getRole(data.form.value.username).subscribe((role)=>{
      // sessionStorage.setItem("status", true.valueOf.toString());
      // sessionStorage.setItem("role",role.toString());
      // console.log( sessionStorage.getItem("role"));
      this.service.setRole(role);
      });
      this.service.getId(data.form.value.username).subscribe((id)=>{
        console.log(id);
        sessionStorage.setItem("id",id.toString());
      this.route.navigate(['']);
      });
    
     }
    },(error)=>{
      this.errorOccured=true;
    });
   } 
}
