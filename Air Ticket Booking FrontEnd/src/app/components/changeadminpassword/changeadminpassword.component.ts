
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-changeadminpassword',
  templateUrl: './changeadminpassword.component.html',
  styleUrls: ['./changeadminpassword.component.css']
})
export class ChangeadminpasswordComponent {
  verified:boolean=false;
  errorOccured!:string;
  error!:string;
  constructor(private adminService:AdminService){}
  verifyOldPassword(data:any){
   let id=Number(sessionStorage.getItem("id"));
     this.adminService.verifyAdminPassword(data.form.value.oldPassword,id).subscribe((response)=>{
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
   this.adminService.changeAdminPassword(data.form.value.password,id).subscribe((response)=>{
     console.log(response);
     this.errorOccured="success";
   },(error)=>{
    console.log(error);
    this.errorOccured="fail";
   })
  }
}