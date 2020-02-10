import { Component, OnInit } from '@angular/core';
import {AppointmentOpLog} from '../../models/Appointment-op-log';
import {DasAppointmentOpLogService} from '../../services/das-appointment-op-log.service';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap, catchError, retry} from "rxjs/operators";
import {HttpErrorResponse} from '@angular/common/http';
import { throwError, empty } from 'rxjs';
@Component({
  selector: 'app-dasappointment-log',
  templateUrl: './dasappointment-log.component.html',
  styleUrls: ['./dasappointment-log.component.css']
})
export class DASAppointmentLogComponent implements OnInit {
  appointmentopLogs:AppointmentOpLog[];
  isError:boolean=false;
  constructor(private dasAppointmentOpLogService:DasAppointmentOpLogService) { }

  ngOnInit() {
             
      interval(3000)
      .pipe(
        startWith(0),
        catchError(this.handleError),
        switchMap(() => this.dasAppointmentOpLogService.getAppointmentOpLogs()
          .pipe(catchError((error)=>{
            this.isError=true;
            this.appointmentopLogs = [];
            return empty();}))
        ),
        )
      .subscribe(appointmentopLogs=>{
        this.isError = false;
        this.appointmentopLogs = appointmentopLogs;
      },err=>{this.appointmentopLogs=[]} );
 
  }

  handleError(error){
    this.appointmentopLogs = [];
    return throwError(error);
  }
 
  setErrorClass(){
    let classes ={
      error:this.isError,
      noerror:!this.isError
    }
    return classes;
  }

}
