import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightDTO } from 'src/app/model/FlightDTO';
import { PassengerDTO } from 'src/app/model/PassengerDTO';
import { TicketDTO } from 'src/app/model/TicketDTO';
import { UserService } from 'src/app/services/user.service';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{
  constructor(private route:ActivatedRoute,private userService:UserService ){}
  
  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.ticketId=data["ticketId"];
      this.flightId=data["flightId"];
      console.log(this.ticketId);
      console.log(this.flightId);
      
      this.userService.getTicketByTicketId(this.ticketId).subscribe((response1)=>{
        this.ticket=response1;
        console.log(this.ticket);
        this.userService.getFlightbyFlightId(this.flightId).subscribe((response)=>{
          this.flight=response;
          console.log(this.flight);
          this.userService.getPassengersByTicketId(this.ticketId).subscribe((response2)=>{
            this.passengerList=response2;
            console.log(this.passengerList)
          });
        });
      });
      
    });
    

  }
  downloadPdf() {
    const element = document.getElementById('ticketPdf');
    console.log('Element found:', element);
    if (element) {
      const pdfWidth = 8.3 * 25.4;
      const pdfHeight = 8.3 * 25.4; 
      html2canvas(element).then((canvas) => {
      let pdf=new jsPDF('p','mm',[pdfWidth, pdfHeight]);
      const imgWidth = pdf.internal.pageSize.width;
      const imgHeight = pdf.internal.pageSize.height;

        const imgData = canvas.toDataURL('image/png');
       
        var position=0;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); 
        pdf.save('exported-document.pdf');
      });
    } else {
      alert('Element with ID "htmlContent" not found.');
    }

  }

  ticket!: TicketDTO;
  passengerList!: PassengerDTO[];
  flight!:FlightDTO;
  ticketId!:number;
  flightId!:number;


  
}
