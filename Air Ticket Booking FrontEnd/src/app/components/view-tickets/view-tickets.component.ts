import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketDTO } from 'src/app/model/TicketDTO';
import { AdminService } from 'src/app/services/admin.service';
import { FlightownerService } from 'src/app/services/flightowner.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {
  isClickable:boolean=false;
  flightId!:number;
  constructor(private flightOwnerService:FlightownerService,private userService:UserService,private route:ActivatedRoute,private router: Router,private adminservice:AdminService){}
   ngOnInit(): void {
     let id=Number(sessionStorage.getItem("id"));
     let role=sessionStorage.getItem("role");
     if(role=="ROLE_FLIGHTOWNER"){
     this.flightOwnerService.getTicketsOfFightOwner(id).subscribe((response)=>{
       this.ticketList=response;
      
     });}
     if(role=="ROLE_USER"){
       this.userService.getTicketsOfUser(id).subscribe((response)=>{
         this.ticketList=response;
         this.isClickable=true;
       });
     }if(role=="ROLE_ADMIN"){
       this.adminservice.getAllTickets().subscribe((response)=>{
        this.ticketList=response;
       })
     }
   }
  ticketList!:TicketDTO[];
 
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

}
