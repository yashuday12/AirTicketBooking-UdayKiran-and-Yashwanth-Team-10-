import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isStatus: boolean=false;
  role:any="ROLE_ADMIN";
  constructor(private route:Router,private router:ActivatedRoute ){
    this.isStatus=Boolean(sessionStorage.getItem("status"));
    console.log(this.isStatus);
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate([''],{relativeTo:this.router});
    });
  
  }
  ngOnInit(): void {
    
   
    this.role=sessionStorage.getItem("role");
  }
   
  logout(){

    sessionStorage.clear();
    console.log(this.role=sessionStorage.getItem("jwttoken"));
    this.isStatus=false;
    this.route.navigate([""]);
  }

}
