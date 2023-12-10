import { Component } from '@angular/core';
import { UserRegistrationDTO } from 'src/app/model/UserRegistrationDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  userDto!:UserRegistrationDTO;
  constructor(private userService:UserService){}
    ngOnInit(): void {
      let id=Number(sessionStorage.getItem("id"));
      this.userService.getUserDetails(id).subscribe((Response)=>{this.userDto=Response; 
        console.log(this.userDto.userName);})
    }
}
