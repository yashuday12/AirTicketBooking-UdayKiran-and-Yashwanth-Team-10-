import { Component, OnInit } from '@angular/core';
import { AdminDTO } from 'src/app/model/AdminDTO';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  adminDto!:AdminDTO;
constructor(private adminService:AdminService){}
  ngOnInit(): void {
    let id=Number(sessionStorage.getItem("id"));
    this.adminService.getAdminDetailsById(id).subscribe((Response)=>{this.adminDto=Response; 
      
      console.log(this.adminDto.adminName);})
  }

}
