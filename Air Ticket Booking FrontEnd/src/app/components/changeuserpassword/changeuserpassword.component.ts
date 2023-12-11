import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-changeuserpassword',
  templateUrl: './changeuserpassword.component.html',
  styleUrls: ['./changeuserpassword.component.css']
})
export class ChangeuserpasswordComponent {

   verified:boolean=false;
   errorOccured!:string;
  error!: string;
   constructor(private userService:UserService){}
   verifyOldPassword(data:any){
    let id=Number(sessionStorage.getItem("id"));
      this.userService.verifyUserPassword(data.form.value.oldPassword,id).subscribe((response)=>{
        console.log(response) ;
        this.verified=response;
        if(this.verified==true){
          this.error="success";
         }else{
          this.error="fail";
         }
       },(error)=>{
        console.log(error);
        this.errorOccured="fail";
       })
   }
   changeUserPassword(data:any){
    let id =Number(sessionStorage.getItem("id"));
    this.userService.changeUserPassword(data.form.value.password,id).subscribe((response)=>{
      console.log(response);
      this.errorOccured="success";
    },(error)=>{
      console.log(error);
      this.errorOccured="fail";
    })
   }

}
