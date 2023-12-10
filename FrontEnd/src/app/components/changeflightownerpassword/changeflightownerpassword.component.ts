import { Component } from '@angular/core';
import { FlightownerService } from 'src/app/services/flightowner.service';

@Component({
  selector: 'app-changeflightownerpassword',
  templateUrl: './changeflightownerpassword.component.html',
  styleUrls: ['./changeflightownerpassword.component.css']
})
export class ChangeflightownerpasswordComponent {
  verified:boolean=false;
  errorOccured!:string;
  error!: string;
  constructor(private flightOwnerService:FlightownerService){}
  verifyOldPassword(data:any){
   let id=Number(sessionStorage.getItem("id"));
     this.flightOwnerService.verifyOwnerPassword(data.form.value.oldPassword,id).subscribe((response)=>{
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
   this.flightOwnerService.changeownerPassword(data.form.value.password,id).subscribe((response)=>{
     console.log(response);
     this.errorOccured="success";
   },(error)=>{
    console.log(error);
    this.errorOccured="fail";
   })
  }

}
