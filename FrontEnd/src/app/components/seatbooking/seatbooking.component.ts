import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDTO } from 'src/app/model/FlightDTO';
import { FlightownerService } from 'src/app/services/flightowner.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seatbooking',
  templateUrl: './seatbooking.component.html',
  styleUrls: ['./seatbooking.component.css']
})
export class SeatbookingComponent implements OnInit {
  bookedSeats: string[] = [];
  selectedSeatCount: number = 0;
  isSeatSelected: boolean = true;
  selectedSeatsList: Set<string> = new Set();
  selectedFlight!: FlightDTO;
  flightId!:number;
  travelDate!:any;
  numSeatsPerRow: number = 8;
  seats!:string[][];
  numRows!:number;
  constructor(private userService:UserService,public datepipe: DatePipe,private service:LoginService,private route:ActivatedRoute,private router:Router){}
  
  
  ngOnInit(): void {
    this.route.params.subscribe((id)=>{
      this.flightId=id["flightId"];
      this.travelDate=id["travelDate"];
      console.log(this.flightId);
      console.log(this.travelDate);
      this.travelDate = this.datepipe.transform(this.travelDate, 'yyyy-MM-dd');
      this.userService.getFlightbyFlightId(this.flightId).subscribe((response)=>{
       this.selectedFlight=response;
       console.log(this.selectedFlight);
       this.numRows = this.calculateNumRows(this.selectedFlight.numberOfSeats);
       this.seats = this.generateSeats(this.selectedFlight.numberOfSeats);
          console.log(this.seats);
          console.log(this.numRows);
     });
     this.service.occupiedSeats(this.travelDate,this.flightId).subscribe((response1)=>{
       this.bookedSeats=response1;
       console.log(this.bookedSeats);
     });
     
   });
  
  
  }
   
  selectSeat(seat:string){
      this.selectedSeatCount+=1;
      this.selectedSeatsList.add(seat);
      console.log(this.selectedSeatCount);
      console.log(this.selectedSeatsList);
  }

  sendDataOfSeats(){
      console.log(this.selectedSeatsList);
      this.router.navigate(['bookticket'], {
        queryParams: {
          travelDate:this.travelDate,
          flightId: this.flightId,
          selectedSeatCount: this.selectedSeatCount,
          seats: JSON.stringify(Array.from(this.selectedSeatsList))
        }
      });
  }
  calculateNumRows(numberOfSeats:number): number {
    console.log(numberOfSeats);
    return Math.ceil(numberOfSeats / this.numSeatsPerRow);
  }
  
  generateSeats(numberOfSeats: any) {
    const seatsArray: string[][] = [];
  
    for (let i = 0; i < this.numRows; i++) {
      const row: string[] = [];
      for (let j = 0; j < this.numSeatsPerRow; j++) {
        const seatNumber = i * this.numSeatsPerRow + j + 1;
        if (seatNumber <= numberOfSeats) {
          row.push(String.fromCharCode(97 + i) + seatNumber);
        }
      }
      seatsArray.push(row);
    }
  
    return seatsArray;
  }
  goToHome(){
    this.router.navigate(['']);
  }
}