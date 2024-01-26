import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDTO } from 'src/app/model/FlightDTO';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   date!:string;
   showTable: boolean = false;
   flights!:FlightDTO[];
   isClickable:boolean=false;
   travelDate!:Date;
   role!:string;
   constructor(private service:LoginService,private router:Router) {
  
   }
  ngOnInit(): void {
    this.service.role$.subscribe((role)=>{
      this.role=role;
    })
    
    if(this.role=="ROLE_USER"){
       this.isClickable=true;
    }
    this.date = new Date().toISOString().split('T')[0];
  }
    
    searchFlight(data:any){
      this.travelDate=data.form.value.travelDate;
      console.log(this.travelDate);
      this.service.searchFlight(data.form.value.source,data.form.value.destination).subscribe((response)=>{
        this.flights=response;
        console.log(this.flights);
        this.flights.forEach(element => {
          console.log(element);
          this.service.occupiedSeats(data.form.value.travelDate,element.flightId).subscribe((response)=>{
            console.log(response);
            element.numberOfSeats=element.numberOfSeats-response.length;
          });
        });
        this.showTable=true;

      });
    }
    navigateToFlightDetails(flightId: number) {
      // Navigate to the flight details route, passing the flightId as a parameter
      console.log(this.travelDate);
      this.router.navigate(['seatbooking',flightId,this.travelDate]);
    }
}
