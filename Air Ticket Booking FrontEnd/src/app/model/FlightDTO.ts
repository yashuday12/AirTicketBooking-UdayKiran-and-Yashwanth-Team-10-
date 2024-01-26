import { Time } from "@angular/common";

export class FlightDTO{

    flightId!:number;
    flightName!:String;
    typeOfFlight!:string;
    source!:string;
    destination!:string;
    timeOfArrival!:Time;
    timeOfDeparture!:Time;
    duration!:string;
    fare!:number;
    numberOfSeats!:number;
    discount!:number;

}