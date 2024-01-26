import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDTO } from 'src/app/model/TicketDTO';
import { AdminService } from 'src/app/services/admin.service';
import { FlightownerService } from 'src/app/services/flightowner.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {
  isClickable:boolean=false;
  flightId!:number;
new: any;
role!:string;
  constructor(private flightOwnerService:FlightownerService,private userService:UserService,private service:LoginService ,private route:ActivatedRoute,private router: Router,private adminservice:AdminService){}
   ngOnInit(): void {
    let id=Number(sessionStorage.getItem("id"));
    //  let role=sessionStorage.getItem("role");
    this.service.role$.subscribe((role)=>{
      this.role=role;
    })
     if(this.role=="ROLE_FLIGHTOWNER"){
     this.flightOwnerService.getTicketsOfFightOwner(id).subscribe((response)=>{
       this.ticketList=response;
       console.log(this.ticketList);
      
     });}
     if(this.role=="ROLE_USER"){
       this.userService.getTicketsOfUser(id).subscribe((response)=>{
         this.ticketList=response;
         this.isClickable=true;
         console.log(this.ticketList);
       });
     }if(this.role=="ROLE_ADMIN"){
       this.adminservice.getAllTickets().subscribe((response)=>{
        this.ticketList=response;
        console.log(this.ticketList);
       })
     }
     this.date = new Date().toISOString().split('T')[0];
  
   }
  ticketList!:TicketDTO[];
  date!:string;
 
  getTicketsOfFlightOwner(){
  }
  deleteTickets(ticketId:number){
   
   this.userService.deleteTicket(ticketId).subscribe((response)=>{console.log(response);
     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
       this.router.navigate(['../viewtickets'],{relativeTo:this.route});
     });
   },
   (error) => {
     console.error('Error deleting ticket', error);
   }
   )
   
  }
  
 
 navigateToTicketDetails(ticketId:number){
      this.userService.getFlightIdByTicketId(ticketId).subscribe((response)=>{
        this.flightId=response;
        this.router.navigate(["../../ticket",ticketId,this.flightId],{relativeTo:this.route});
      })
 }
 isDateInPast(traveldate:any){
  
  return traveldate < this.date;


 }

}
