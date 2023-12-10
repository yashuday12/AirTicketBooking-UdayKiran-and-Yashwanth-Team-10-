import { Component } from '@angular/core';
import { UserRegistrationDTO } from 'src/app/model/UserRegistrationDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  date!:string;
  user!:UserRegistrationDTO;
  errorOccured!:string;
  constructor(private service:UserService){
    this.date = new Date().toISOString().split('T')[0];
  }
   registration(data:any){
     this.service.adduser(data.form.value).subscribe((response)=>{
      console.log(response);
      this.user=response;
          this.service.sendEmailOnRegistration(this.user.userId).subscribe((response)=>{
            console.log(response);
            this.errorOccured="success";
          },(error)=>{
            console.log(error);
            this.errorOccured="fail";
          })
     })
   }
}
