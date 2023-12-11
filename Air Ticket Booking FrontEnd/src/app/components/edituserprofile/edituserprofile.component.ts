import { Component, OnInit } from '@angular/core';
import { UserRegistrationDTO } from 'src/app/model/UserRegistrationDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edituserprofile',
  templateUrl: './edituserprofile.component.html',
  styleUrls: ['./edituserprofile.component.css']
})
export class EdituserprofileComponent implements OnInit {
  user!:UserRegistrationDTO;
  userId!:number;
  errorOccured!:string;
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userId=Number(sessionStorage.getItem("id"));
    this.userService.getUserDetails(this.userId).subscribe((data)=>{
    this.user=data;
  });

}
   editUser(data:any){
    this.userService.editUser(this.user,this.userId).subscribe((response)=>{
      console.log(response);
      this.errorOccured="success";
    },(error)=>{
      console.log(error);
      this.errorOccured="fail";})
   }
  }

