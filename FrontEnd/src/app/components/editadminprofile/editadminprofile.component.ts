import { Component } from '@angular/core';
import { AdminDTO } from 'src/app/model/AdminDTO';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-editadminprofile',
  templateUrl: './editadminprofile.component.html',
  styleUrls: ['./editadminprofile.component.css']
})
export class EditadminprofileComponent {
  constructor(private service:AdminService){}
  admin!:AdminDTO;
  adminId!:number
  errorOccured!:string;
  ngOnInit(): void {
    this.adminId=Number(sessionStorage.getItem("id"));
    console.log(this.adminId);
    this.service.getAdminDetailsById(Number(this.adminId)).subscribe((data)=>{
    this.admin=data;
    console.log(this.admin);
   })
   
}
editAdmin(data:any){

   this.service.editAdminProfile(this.admin,this.adminId).subscribe((response)=>{
    console.log(response); 
    this.errorOccured="success";
   },(error)=>{
     console.log(error);
     this.errorOccured="fail";
   });
}
}
