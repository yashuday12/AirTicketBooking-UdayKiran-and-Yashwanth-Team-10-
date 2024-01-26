import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AdminDTO } from '../model/AdminDTO';
import { Observable } from 'rxjs';
import { FlightOwnerDTO } from '../model/FlightOwnerDTO';
import { UserRegistrationDTO } from '../model/UserRegistrationDTO';
import { TicketDTO } from '../model/TicketDTO';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit{
 
  constructor(private http:HttpClient,private service:LoginService) {
    
   }
  ngOnInit(): void {
   
  }
  ROOT_URL:String="http://localhost:8181";

  getUserDetails():Observable<UserRegistrationDTO []>{
     
    let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    console.log(headers);
     return this.http.get<UserRegistrationDTO []>(this.ROOT_URL+"/api/v1/user/getallusers",{headers});
}
addFlightOwner(data:FlightOwnerDTO):Observable<FlightOwnerDTO>{

   let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.post<FlightOwnerDTO>(this.ROOT_URL+"/api/v1/flightowner/addflightowner",data,{headers})
}

getFlightOwner():Observable<FlightOwnerDTO[]>{
   let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    return this.http.get<FlightOwnerDTO []>(this.ROOT_URL+"/api/v1/flightowner/getallflightowner",{headers});
}

getAdminDetailsById(adminId:number):Observable <AdminDTO>{
 
  let jwtTokenString=this.service.getjwtToken();
  console.log(jwtTokenString);
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
    console.log(headers);
  return this.http.get<AdminDTO>(this.ROOT_URL+`/api/v1/admin/getadminbyid/${adminId}`,{headers});
}
 editAdminProfile(data:AdminDTO,adminId:number):Observable<AdminDTO>{

 let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
  return this.http.put<AdminDTO>(this.ROOT_URL+`/api/v1/admin/updateadmin/${adminId}`,data,{headers})
}
verifyAdminPassword(password:string, adminId:number){
 let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
  return this.http.get<boolean>(this.ROOT_URL+`/api/v1/admin/verifyadminpassword/${adminId}/${password}`,{headers});
}
changeAdminPassword(password:string,adminId:number){
 let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
  return this.http.put<AdminDTO>(this.ROOT_URL+`/api/v1/admin/changeadminpassword/${adminId}/${password}`,null,{headers});
}
getAllTickets():Observable<TicketDTO[]>{
 let jwtTokenString=this.service.getjwtToken();
  const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
  console.log(headers);
  return this.http.get<TicketDTO[]>(this.ROOT_URL+`/api/v1/ticket/getallticket`,{headers})
}
deleteFlightOwners(flightOwnerId:number):Observable<any>{
 let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
  return this.http.delete(this.ROOT_URL+`/api/v1/flightowner/deleteflightowner/${flightOwnerId}`,{headers,responseType:'text'})
}
deleteUsers(userId:number):Observable<any>{
 let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
  return this.http.delete(this.ROOT_URL+`/api/v1/user/deleteuserbyid/${userId}`,{headers,responseType:'text'})
}
}
