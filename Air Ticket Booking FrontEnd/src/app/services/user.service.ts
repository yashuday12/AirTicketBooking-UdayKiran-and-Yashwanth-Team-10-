import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightDTO } from '../model/FlightDTO';
import { TicketDTO } from '../model/TicketDTO';
import { TicketPassenger } from '../model/TicketPassenger';
import { PassengerDTO } from '../model/PassengerDTO';
import { UserRegistrationDTO } from '../model/UserRegistrationDTO';
import { PaymentDTO } from '../model/PaymentDTO';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient,private service:LoginService) {
   
  }
 
  ROOT_URL:String="http://localhost:8181";
  getFlightbyFlightId(flightId:number){
   
    let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<FlightDTO>(this.ROOT_URL+`/api/v1/flight/Getflightbyid/${flightId}`,{headers});
  }

  
  bookTicket(ticketPassenger:TicketPassenger,flightId:number,userId:number):Observable<TicketDTO>{
   
    let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    console.log(ticketPassenger);
    return this.http.post<TicketDTO>(this.ROOT_URL+`/api/v1/ticket/addticket/${userId}/${flightId}`,ticketPassenger,{headers});
  }

  getTicketByTicketId(ticketId:number){
   
    let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<TicketDTO>(this.ROOT_URL+`/api/v1/ticket/getticketbyid/${ticketId}`,{headers});

  }
  getPassengersByTicketId(ticketId:number){
   
    let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<PassengerDTO[]>(this.ROOT_URL+`/api/v1/passenger/getpassengersbyticketId/${ticketId}`,{headers});
  }
  getTicketsOfUser(userId:number){
    
   
    let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<TicketDTO []>(this.ROOT_URL+`/api/v1/ticket/ticketbookedbyuserid/${userId}`,{headers});
  }
  viewPaymentHistory(userId:number){
   
   
    let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<PaymentDTO[]>(this.ROOT_URL+`/api/v1/payment/history/${userId}`,{headers});
  }

  rechargeWallet(userId:number,wallet:number){
    
   
    let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    
    return this.http.put<UserRegistrationDTO>(this.ROOT_URL+`/api/v1/user/rechargewallet/${userId}/${wallet}`,null,{headers});
  }
  getUserDetails(userId:number){
  
  let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    console.log(headers);
    return this.http.get<UserRegistrationDTO>(this.ROOT_URL+`/api/v1/user/getuserbyid/${userId}`,{headers})
  }
  adduser(user:UserRegistrationDTO){
    return this.http.post<UserRegistrationDTO>(this.ROOT_URL+`/api/v1/user/adduser`,user)
  }
  editUser(user:UserRegistrationDTO,userId:number){
  
  let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.put<UserRegistrationDTO>(this.ROOT_URL+`/api/v1/user/updateuser/${userId}`,user,{headers});
  }
  verifyUserPassword(password:string, userId:number){
  
  let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<boolean>(this.ROOT_URL+`/api/v1/user/verifyuserpassword/${userId}/${password}`,{headers});
  }
  changeUserPassword(password:string,userId:number){
  
  let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.put<UserRegistrationDTO>(this.ROOT_URL+`/api/v1/user/changeuserpassword/${userId}/${password}`,null,{headers});
  }
  deleteTicket(ticketId:number):Observable<any>{
  
  let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.delete(this.ROOT_URL+`/api/v1/ticket/deleteticket/${ticketId}`,{headers,responseType:'text'})
  }
  getFlightIdByTicketId(ticketId:number){
  
  let jwtTokenString=this.service.getjwtToken();
     const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<number>(this.ROOT_URL+`/api/v1/ticket/getflightid/${ticketId}`,{headers});
  }
  sendEmailOnRegistration(userId:number){
    return this.http.get<boolean>(this.ROOT_URL+`/api/v1/user/sendmailonregistration/${userId}`);
  }
  sendEmailOnBooking(ticketId:number){
  
  let jwtTokenString=this.service.getjwtToken();
  const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    console.log(ticketId);
    return this.http.get<boolean>(this.ROOT_URL+`/api/v1/ticket/sendemailonbooking/${ticketId}`,{headers});
  }


  }
