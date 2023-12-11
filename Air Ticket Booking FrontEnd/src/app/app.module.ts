import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admindashboard/admindashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AddFlightOwnerComponent } from './components/addflightowner/addflightowner.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import{HttpClientModule} from '@angular/common/http';
import { ViewflightownerComponent } from './components/viewflightowner/viewflightowner.component';
import { EditadminprofileComponent } from './components/editadminprofile/editadminprofile.component';
import { AddflightComponent } from './components/addflight/addflight.component';
import { ViewTicketsComponent } from './components/view-tickets/view-tickets.component';
import { ViewflightsComponent } from './components/viewflights/viewflights.component';
import { EditflightComponent } from './components/editflight/editflight.component';
import { FlightownerdashboardComponent } from './components/flightownerdashboard/flightownerdashboard.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { SeatbookingComponent } from './components/seatbooking/seatbooking.component';
import { DatePipe } from '@angular/common';
import { BookticketComponent } from './components/bookticket/bookticket.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { RechargewalletComponent } from './components/rechargewallet/rechargewallet.component';
import { PaymenthistoryComponent } from './components/paymenthistory/paymenthistory.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditflightownerprofileComponent } from './components/editflightownerprofile/editflightownerprofile.component';
import { EdituserprofileComponent } from './components/edituserprofile/edituserprofile.component';
import { ChangeuserpasswordComponent } from './components/changeuserpassword/changeuserpassword.component';
import { ChangeadminpasswordComponent } from './components/changeadminpassword/changeadminpassword.component';
import { ChangeflightownerpasswordComponent } from './components/changeflightownerpassword/changeflightownerpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashboardComponent,
    HeaderComponent,
    AddFlightOwnerComponent,
    ViewuserComponent,
    SignupComponent,
    LoginComponent,
    ViewflightownerComponent,
    EditadminprofileComponent,
    AddflightComponent,
    ViewTicketsComponent,
    ViewflightsComponent,
    EditflightComponent,
    FlightownerdashboardComponent,
    UserdashboardComponent,
    SeatbookingComponent,
    BookticketComponent,
    TicketComponent,
    RechargewalletComponent,
    PaymenthistoryComponent,
    FooterComponent,
    EditflightownerprofileComponent,
    EdituserprofileComponent,
    ChangeuserpasswordComponent,
    ChangeadminpasswordComponent,
    ChangeflightownerpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
