import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isStatus: boolean=false;
  role!:any;
  constructor(private route:Router,private router:ActivatedRoute,private service:LoginService ){
    // this.isStatus=Boolean(sessionStorage.getItem("status"));
    // console.log(this.isStatus);
    // this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.route.navigate([''],{relativeTo:this.router});
    // });
  
  }
  ngOnInit(): void {
    // this.role=sessionStorage.getItem("role");
    this.service.isStatus$.subscribe((status) => {
      this.isStatus = status;
    });
    // this.role=sessionStorage.getItem("role");
    // console.log(this.role);
    this.service.role$.subscribe((role)=>{
      this.role=role;
    })
  }
   
  logout(){

    sessionStorage.clear();
    console.log(this.role=sessionStorage.getItem("jwttoken"));
    this.service.setAuthenticationStatus(false);
    this.route.navigate([""]);
  }

}
