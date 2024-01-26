import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authrequest } from '../model/AuthRequest';
import { BehaviorSubject, Observable } from 'rxjs';
import { FlightDTO } from '../model/FlightDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ROOT_URL:String="http://localhost:8181";
  token!:any;
  tokenString!:string;
  private isStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isStatus$: Observable<boolean> = this.isStatusSubject.asObservable();
  private role: BehaviorSubject<string> = new BehaviorSubject<string>("ROLE_ADMIN");
  role$: Observable<string> = this.role.asObservable();
  constructor(private http:HttpClient) { }
  
  getToken(data:Authrequest):Observable<String>{
   return  this.http.post(this.ROOT_URL+"/api/v1/login/userlogin",data,{ responseType: 'text' });
  }

  getRole(name:string){
    return this.http.get(this.ROOT_URL+`/api/v1/login/getrole/${name}`,{ responseType: 'text' });
  }
  getId(name:String){
    return this.http.get(this.ROOT_URL+`/api/v1/login/getid/${name}`);
  }
  
  searchFlight(source:string,destination:string):Observable<FlightDTO []>{
    return this.http.get<FlightDTO []>(this.ROOT_URL+`/api/v1/flight/searchflight/${source}/${destination}`)
  }
  occupiedSeats(travelDate:Date,flightId:number):Observable<string []>{
    
      return this.http.get<string []>(this.ROOT_URL+`/api/v1/passenger/fetchbookedseats/${travelDate}/${flightId}`);
  }
  setToken(token:String){
    sessionStorage.setItem("jwttoken", token.toString());
  }
  getjwtToken(){
    this.token=sessionStorage.getItem("jwttoken");
    this.tokenString="Bearer "+this.token;
    return this.tokenString;
  }
  setAuthenticationStatus(status: boolean) {
    this.isStatusSubject.next(status);
  }
  setRole(role:string){
    this.role.next(role);
  }
  
   }

