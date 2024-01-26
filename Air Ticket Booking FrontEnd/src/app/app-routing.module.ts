import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightOwnerComponent } from './components/addflightowner/addflightowner.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ViewflightownerComponent } from './components/viewflightowner/viewflightowner.component';
import { EditadminprofileComponent } from './components/editadminprofile/editadminprofile.component';
import { FlightownerdashboardComponent } from './components/flightownerdashboard/flightownerdashboard.component';
import { AddflightComponent } from './components/addflight/addflight.component';
import { ViewTicketsComponent } from './components/view-tickets/view-tickets.component';
import { ViewflightsComponent } from './components/viewflights/viewflights.component';
import { EditflightComponent } from './components/editflight/editflight.component';
import { SeatbookingComponent } from './components/seatbooking/seatbooking.component';
import { BookticketComponent } from './components/bookticket/bookticket.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { RechargewalletComponent } from './components/rechargewallet/rechargewallet.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { PaymenthistoryComponent } from './components/paymenthistory/paymenthistory.component';
import { AdminDashboardComponent } from './components/admindashboard/admindashboard.component';
import { EditflightownerprofileComponent } from './components/editflightownerprofile/editflightownerprofile.component';
import { EdituserprofileComponent } from './components/edituserprofile/edituserprofile.component';
import { ChangeuserpasswordComponent } from './components/changeuserpassword/changeuserpassword.component';
import { ChangeadminpasswordComponent } from './components/changeadminpassword/changeadminpassword.component';
import { ChangeflightownerpasswordComponent } from './components/changeflightownerpassword/changeflightownerpassword.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  
      {path:'', component:HomeComponent},    
      { path: 'admindashboard',component: AdminDashboardComponent,
          children: [
            { path: 'flight', component: AddFlightOwnerComponent },
            { path: 'user', component: ViewuserComponent },
            { path:'flightowner',component:ViewflightownerComponent},
            {path:"changeadminpassword",component:ChangeadminpasswordComponent},
            {path:'viewtickets',component:ViewTicketsComponent}
          ],canActivate:[authGuard]
     },
      {path: 'flightownerdashsboard',component: FlightownerdashboardComponent,
          children: [
            { path: 'addflight', component:AddflightComponent },
            { path: 'viewtickets', component:ViewTicketsComponent},
            { path:'viewflights',component:ViewflightsComponent},
            { path:'edit/:flightId',component:EditflightComponent},
            {path:'editflightowner',component:EditflightownerprofileComponent},
            {path:'changeownerpassword',component:ChangeflightownerpasswordComponent}
          ],canActivate:[authGuard]
     },
      {path:'seatbooking/:flightId/:travelDate',component:SeatbookingComponent},
      {path:'bookticket',component:BookticketComponent},
      {path:'ticket/:ticketId/:flightId',component:TicketComponent},
      {path: 'userdashboard',component: UserdashboardComponent,
          children: [
            {path:'paymenthistory',component:PaymenthistoryComponent},
            {path:'rechargewallet',component:RechargewalletComponent},
            {path:'edituser',component:EdituserprofileComponent},
            {path:'changeuserpassword',component:ChangeuserpasswordComponent},
            { path: 'viewtickets', component:ViewTicketsComponent}
          ],canActivate:[authGuard]
     }
    ,
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
