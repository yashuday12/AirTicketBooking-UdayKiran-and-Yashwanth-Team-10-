import { Component } from '@angular/core';
import { FlightOwnerDTO } from 'src/app/model/FlightOwnerDTO';
import { FlightownerService } from 'src/app/services/flightowner.service';

@Component({
  selector: 'app-flightownerdashboard',
  templateUrl: './flightownerdashboard.component.html',
  styleUrls: ['./flightownerdashboard.component.css']
})
export class FlightownerdashboardComponent {
  flightOwnerDto!:FlightOwnerDTO;
  constructor(private flightOwnerService:FlightownerService){}
    ngOnInit(): void {
      let id=Number(sessionStorage.getItem("id"));
      this.flightOwnerService.getFlightOwnerById(id).subscribe((Response)=>{this.flightOwnerDto=Response; 
        console.log(this.flightOwnerDto.flightOwnerName);})
    }
}