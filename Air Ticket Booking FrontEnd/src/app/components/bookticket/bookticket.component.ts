import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDTO } from 'src/app/model/FlightDTO';
import { PassengerDTO } from 'src/app/model/PassengerDTO';
import { TicketDTO } from 'src/app/model/TicketDTO';
import { TicketPassenger } from 'src/app/model/TicketPassenger';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
    errorOccured!:string;
    constructor(private route:ActivatedRoute,private userService:UserService,private router:Router){
             
    }
  ngOnInit(): void {
    this.route.queryParams.subscribe((data)=>{
     this.travelDate=data["travelDate"];
     this.selectedSeats=JSON.parse(data["seats"]);
     this.flightId=data["flightId"];
     this.noOfSeats=data["selectedSeatCount"];
     this.userService.getFlightbyFlightId(this.flightId).subscribe((response)=>{
      this.flight=response;
      this.totalAmountBeforeDiscount=this.noOfSeats*this.flight.fare;
      this.discountAmount=(this.totalAmountBeforeDiscount)*(this.flight.discount/100)
      this.totalAmountAfterDiscount=this.totalAmountBeforeDiscount-(this.discountAmount);

     this.noOfPassengers=this.noOfSeats;
     });
     

    })
  }
  selectedSeats!:string[];
  noOfSeats!:number;
  flightId!:number;
  totalAmountBeforeDiscount!:number;
  totalAmountAfterDiscount!:number;
  discountAmount!:number;
  flight!: FlightDTO;
  travelDate!:Date;
  ticketsId!:number;
  ticket:TicketDTO={
     ticketId:0,
     travelDate: new Date(),
     email:'',
     totalAmount:0,
     numberOfPassengers:0
  }
  email:string="";
  passengers:PassengerDTO[]=[];
  passenger:PassengerDTO={
    passengerId:0,
    passengerName:'',
    passengerAge:0,
    passengerSeatNumber:''
  }
  noOfPassengers!:number;
  back(){
    this.router.navigate(['/seatbooking',this.flightId,this.travelDate]);
  }
  addPassenger(){
    const newPassenger: PassengerDTO = {
      passengerId: this.passenger.passengerId,
      passengerName: this.passenger.passengerName,
      passengerAge: this.passenger.passengerAge,
      passengerSeatNumber: this.selectedSeats[this.noOfPassengers - 1]
    };
     this.noOfPassengers-=1;
     console.log(this.passenger);
     this.passengers.push(newPassenger);
    console.log(this.passengers);

  }
  bookTicket(){
    this.ticket["travelDate"]=this.travelDate;
    this.ticket["email"]=this.email;
    this.ticket["totalAmount"]=this.totalAmountAfterDiscount;
    this.ticket["numberOfPassengers"]=this.noOfSeats;
    console.log(this.ticket);
    let ticketPassenger:TicketPassenger={
      ticketDto:this.ticket,
      passengerDto:this.passengers
    }
    let id:any=sessionStorage.getItem("id");
    this.userService.bookTicket(ticketPassenger,this.flightId,id).subscribe((response)=>{
      this.ticketsId=response.ticketId;
      console.log(this.ticketsId);
      this.userService.sendEmailOnBooking(this.ticketsId).subscribe((response)=>{
        console.log(response);
      })
      this.router.navigate(["ticket",this.ticketsId,this.flightId]);
    },(error)=>{
      console.log(error);
      this.errorOccured="fail";
    });
    
  }
}