import { Component } from '@angular/core';
import { PaymentDTO } from 'src/app/model/PaymentDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent {
  paymentHistory!:PaymentDTO[];
  constructor(private userService:UserService){

  }
  ngOnInit(): void {
    let id=Number(sessionStorage.getItem("id"))
  this.userService.viewPaymentHistory(id).subscribe(response=>{this.paymentHistory=response})
  }
}
