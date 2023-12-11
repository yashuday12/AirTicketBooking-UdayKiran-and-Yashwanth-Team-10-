import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FlightDTO } from '../model/FlightDTO';
import { Observable } from 'rxjs';
import { TicketDTO } from '../model/TicketDTO';
import { FlightOwnerDTO } from '../model/FlightOwnerDTO';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FlightownerService implements OnInit {
 
  constructor(private http:HttpClient,private service:LoginService) {
    
   }
  ngOnInit(): void {
    
  }

  ROOT_URL:String="http://localhost:8181";

  addFlight(data:FlightDTO,flightOwnerId:number):Observable<FlightDTO>{
    let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.post<FlightDTO>(this.ROOT_URL+`/api/v1/flight/addflight/${flightOwnerId}`,data,{headers});
  }
  getTicketsOfFightOwner(flightOwnerId:number):Observable<TicketDTO[]>{
     let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<TicketDTO[]>(this.ROOT_URL+`/api/v1/ticket/getticketsByflightownerid/${flightOwnerId}`,{headers});
  }
  getFlightsbyFlightOwnerId(flightOwnerId:number):Observable<FlightDTO[]>{
     let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<FlightDTO[]>(this.ROOT_URL+`/api/v1/flight/getflightsbyflightownerid/${flightOwnerId}`,{headers});
  }

  getFlightbyFlightId(flightId:number){
     let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<FlightDTO>(this.ROOT_URL+`/api/v1/flight/Getflightbyid/${flightId}`,{headers});
  }
 editFlight(flight:FlightDTO,flightOwnerId:number){
   let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
  return this.http.put<FlightDTO>(this.ROOT_URL+`/api/v1/flight/updateflight/${flightOwnerId}`,flight,{headers});
 }
 getFlightOwnerById(flightOwnerId:number){
  let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
  return this.http.get<FlightOwnerDTO>(this.ROOT_URL+`/api/v1/flightowner/getflightownerbyid/${flightOwnerId}`,{headers});
 }
 editFlightOwner(flightOwner:FlightOwnerDTO,flightOwnerId:number){
  let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
  return this.http.put<FlightOwnerDTO>(this.ROOT_URL+`/api/v1/flightowner/updateflightowner/${flightOwnerId}`,flightOwner,{headers});
 }
 verifyOwnerPassword(password:string, flightOwnerId:number){
  let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);;
  return this.http.get<boolean>(this.ROOT_URL+`/api/v1/flightowner/verifyownerpassword/${flightOwnerId}/${password}`,{headers});
}
changeownerPassword(password:string,flightOwnerId:number){
  let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);;
  return this.http.put<FlightOwnerDTO>(this.ROOT_URL+`/api/v1/flightowner/changeownerpassword/${flightOwnerId}/${password}`,null,{headers});
}
deleteFlight(flightId:number){
  let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);;
  return this.http.delete(this.ROOT_URL+`/api/v1/flight/deleteflight/${flightId}`,{headers,responseType:'text'})
 }
 
}