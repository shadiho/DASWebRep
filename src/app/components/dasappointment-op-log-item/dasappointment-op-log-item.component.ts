import { Component, OnInit, Input,Directive,ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import {AppointmentOpLog} from '../../models/Appointment-op-log';
import { DasSimulatorService } from '../../services/das-simulator.service';
import {MatSnackBar} from '@angular/material';
import {Appointment} from '../../models/Appointment';
import { TimeoutError } from 'rxjs';
@Component({
  selector: 'app-dasappointment-op-log-item',
  templateUrl: './dasappointment-op-log-item.component.html',
  styleUrls: ['./dasappointment-op-log-item.component.css']
})

export class DASAppointmentOpLogItemComponent implements OnInit {

  @Input() opLog1:AppointmentOpLog;
  constructor(private dasSimulatorService:DasSimulatorService, private _snackBar: MatSnackBar,
    private elem: ElementRef) { }

  isDeleted:boolean=false;
  
  ngOnInit() {
  }

  //set Dynamic Classes
  setClasses(){
    let Classes={
        container:true,
        bookContainer: this.opLog1.operation == "book",
        cancelContainer: this.opLog1.operation == "cancel"
    }
    return Classes;
  }

  setOpClass(){
    let classes={
      op:true,
      book: this.opLog1.operation == "book",
      cancel: this.opLog1.operation == "cancel"
    }
    return classes;
  }
  setButtonClass(){
    let classes={
      cancelBtnHdn: this.opLog1.operation != ""
    }
    return classes;
  }
  openError(message:string,action:string='Error'){
    //let action:string ='';
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onClickCancelAppointmentBtn(appointmentOpLogComponenet){
    appointmentOpLogComponenet.destroy();
    let appointment:Appointment = new Appointment();
    appointment.appointmentID = this.opLog1.appointmentID;
    appointment.creationDateTime = this.opLog1.creationDateTime;
    appointment.doctorId = this.opLog1.doctorID;
    appointment.patientId = this.opLog1.patientID;
    this.dasSimulatorService.cancelAppointment(appointment).subscribe(succss=>{
      this.openError('Appointment has been deleted successfully','Success');
    }, error=>{
      this.openError('Error');
    });

  }
  setCardClass(){
    let classes ={
      hiddenCard: this.isDeleted
    }
    return classes;
  }
  destroy(){
    this.isDeleted = true;
  }

}
