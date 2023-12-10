import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationDTO } from 'src/app/model/UserRegistrationDTO';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {


  userDetails!: UserRegistrationDTO[];

  constructor(private service:AdminService,private route:ActivatedRoute,private router: Router){}
  ngOnInit(): void {
      
     this.service.getUserDetails().subscribe((data)=>{

      this.userDetails=data;
    

     })
  }
  deleteUsers(userId:number){
  
    this.service.deleteUsers(userId).subscribe((response)=>{console.log(response);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['../user'],{relativeTo:this.route});
      });
    },
    (error) => {
      console.error('no tickets found');
    }
    )
    
   
  }
    
   

   

}
