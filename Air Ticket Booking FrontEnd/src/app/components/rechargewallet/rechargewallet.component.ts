import { Component } from '@angular/core';
import { UserRegistrationDTO } from 'src/app/model/UserRegistrationDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rechargewallet',
  templateUrl: './rechargewallet.component.html',
  styleUrls: ['./rechargewallet.component.css']
})
export class RechargewalletComponent {
  userDetails!:UserRegistrationDTO;
  wallet!:number;
  errorOccured!:string;
  constructor(private userService:UserService){}
  ngOnInit(): void {
    let id =Number(sessionStorage.getItem("id"));
    this.userService.getUserDetails(id).subscribe((response)=>{
      this.userDetails=response;
    console.log(this.userDetails);});
  }
rechargeWallet(data:any){
  let id=Number(sessionStorage.getItem("id"))
  this.wallet=data.form.value.wallet;
  console.log(this.wallet)
    this.userService.rechargeWallet(id,this.wallet).subscribe((response)=>{console.log(response);
    this.userDetails=response
    this.errorOccured="success";
  },(error)=>{
    this.errorOccured="fail";
    console.log(error);
  });
}
}
