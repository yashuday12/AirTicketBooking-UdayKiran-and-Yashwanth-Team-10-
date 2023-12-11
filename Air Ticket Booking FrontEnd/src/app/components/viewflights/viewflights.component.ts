import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDTO } from 'src/app/model/FlightDTO';
import { FlightownerService } from 'src/app/services/flightowner.service';

@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit{
  isClickable:boolean=true;
  flights!:FlightDTO[];

  constructor(private flightOwnerService:FlightownerService,private route:Router,private router:ActivatedRoute){}
  ngOnInit(): void {
     let id=Number(sessionStorage.getItem("id"));
     this.flightOwnerService.getFlightsbyFlightOwnerId(id).subscribe((response)=>{
      this.flights=response;
      console.log(this.flights);
     })
  }
  deleteFlight(flightId:number){
    this.flightOwnerService.deleteFlight(flightId).subscribe((response1)=>{console.log(response1);
    this.route.navigateByUrl('/',{ skipLocationChange: true }).then(()=>
    {this.route.navigate(['../viewflights',],{relativeTo:this.router})
  }
  )
})

  }
                                                                            
  navigateToFlightDetails(flightId:number){
   
    this.route.navigate(['../edit', flightId],{relativeTo:this.router}); 
    
  }                                                                          
}
