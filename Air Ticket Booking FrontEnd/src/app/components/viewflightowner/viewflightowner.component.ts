import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightOwnerDTO } from 'src/app/model/FlightOwnerDTO';
import { AdminService } from 'src/app/services/admin.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-viewflightowner',
  templateUrl: './viewflightowner.component.html',
  styleUrls: ['./viewflightowner.component.css']
})
export class ViewflightownerComponent implements OnInit{
  flightOwner!:FlightOwnerDTO[];

  constructor(private service:AdminService,private route:ActivatedRoute,private router: Router){

  }
 ngOnInit(): void {
   this.service.getFlightOwner().subscribe((response)=>{
     this.flightOwner=response;
   })
 }
 deleteFlghtOwners(flightOwnerId:number){
 
   this.service.deleteFlightOwners(flightOwnerId).subscribe((response)=>{console.log(response);
     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
       this.router.navigate(['../flightowner'],{relativeTo:this.route});
     });
   },
   (error) => {
     console.error('Error deleting ticket', error);
   }
   )
   
   




}
}
