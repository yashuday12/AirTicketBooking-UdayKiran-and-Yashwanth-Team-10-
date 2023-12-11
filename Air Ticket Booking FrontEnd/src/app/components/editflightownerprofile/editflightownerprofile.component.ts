import { Component } from '@angular/core';
import { FlightOwnerDTO } from 'src/app/model/FlightOwnerDTO';
import { FlightownerService } from 'src/app/services/flightowner.service';

@Component({
  selector: 'app-editflightownerprofile',
  templateUrl: './editflightownerprofile.component.html',
  styleUrls: ['./editflightownerprofile.component.css']
})
export class EditflightownerprofileComponent {
  constructor(private service:FlightownerService){}
  flightOwner!:FlightOwnerDTO;
  flightOwnerId!:number
  errorOccured!:string;
  ngOnInit(): void {
    this.flightOwnerId=Number(sessionStorage.getItem("id"));
    this.service.getFlightOwnerById(this.flightOwnerId).subscribe((data)=>{
    this.flightOwner=data;
   })
   
}
editFlightOwner(data:any){

   this.service.editFlightOwner(this.flightOwner,this.flightOwnerId).subscribe((response)=>{
    console.log(response);
    this.errorOccured="success"; 
  
   },(error)=>{
      console.log(error);
      this.errorOccured="fail";
   });
}
}
