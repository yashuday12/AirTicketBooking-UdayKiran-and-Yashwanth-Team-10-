import { Component } from '@angular/core';
import { FlightOwnerDTO } from 'src/app/model/FlightOwnerDTO';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-flight',
  templateUrl: './addflightowner.component.html',
  styleUrls: ['./addflightowner.component.css']
})
export class AddFlightOwnerComponent {
  flightOwnerDTO: FlightOwnerDTO=new FlightOwnerDTO();
  errorOccured!:string;
  constructor(private service:AdminService){}
  addFlightOwner(data:any){
    console.log(data.form.value);
    this.service.addFlightOwner(data.form.value).subscribe((response)=>{
        this.flightOwnerDTO=response;
        console.log(this.flightOwnerDTO);
        this.errorOccured="success";
    },(error)=>{
      console.log(error);
      this.errorOccured="fail";
    })
  }
}
