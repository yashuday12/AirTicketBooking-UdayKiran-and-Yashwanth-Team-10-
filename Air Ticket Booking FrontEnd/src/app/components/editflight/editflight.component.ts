import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightDTO } from 'src/app/model/FlightDTO';
import { FlightownerService } from 'src/app/services/flightowner.service';

@Component({
  selector: 'app-editflight',
  templateUrl: './editflight.component.html',
  styleUrls: ['./editflight.component.css']
})
export class EditflightComponent implements OnInit{
  
  errorOccured!:string;
 flight!:FlightDTO;
 flightId!:number;
  constructor(private flightOwnerService:FlightownerService, private router:ActivatedRoute){

  }
  ngOnInit(): void {
    this.router.params.subscribe((id)=>{
       this.flightId=id["flightId"];
       this.flightOwnerService.getFlightbyFlightId(this.flightId).subscribe((response)=>{
        this.flight=response;
        console.log(this.flight);
      });
    });
    

  }

  editFlight(data:any){
   let id=Number(sessionStorage.getItem("id"));
   this.flightOwnerService.editFlight(this.flight,id).subscribe((response)=>{
      console.log(response);
      this.errorOccured="success"
   },(error)=>{
      this.errorOccured="fail"
   })
    
  }



}
