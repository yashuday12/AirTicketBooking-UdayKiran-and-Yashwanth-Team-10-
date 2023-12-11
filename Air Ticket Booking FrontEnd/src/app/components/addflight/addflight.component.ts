import { Component } from '@angular/core';
import { FlightDTO } from 'src/app/model/FlightDTO';
import { FlightOwnerDTO } from 'src/app/model/FlightOwnerDTO';
import { FlightownerService } from 'src/app/services/flightowner.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent {
   
 constructor(private flightOwnerService:FlightownerService){}
 flight!:FlightDTO;
 errorOccured!:string;
 addFlight(data:any){
  console.log(data.form.value);
  let flightOwnerId=Number(sessionStorage.getItem("id"));
  this.flight=data.form.value;
  console.log(this.flight);
  this.flightOwnerService.addFlight(this.flight,flightOwnerId).subscribe((response)=>{
    console.log(response);
    this.errorOccured="success";
  },(error)=>{
     console.log(error);
     this.errorOccured="fail";
  })
 }




}
