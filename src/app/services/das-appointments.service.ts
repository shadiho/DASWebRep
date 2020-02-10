import { Injectable } from '@angular/core';
import {Appointment} from '../models/Appointment';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { $ } from 'protractor';
import { AppointmentOpLog } from '../models/Appointment-op-log';

@Injectable({
  providedIn: 'root'
})
export class DasAppointmentsService {

  appointmentsSrvUrl:string ='http://ec2-18-188-77-96.us-east-2.compute.amazonaws.com/api/v1/AppointmentsController/GetAppointments?';
  appointments:Appointment[];
  constructor(private http:HttpClient) { }
  getAppointmentsList(doctorID:string, patientID:string){
    let appointmentsSrvUrl:string=this.appointmentsSrvUrl;
    if (doctorID){
      appointmentsSrvUrl = appointmentsSrvUrl + 'doctorID=' + doctorID + '&';
    }
    if (patientID){
      appointmentsSrvUrl = appointmentsSrvUrl + 'patientID=' + patientID;
    }
    return this.http.get<AppointmentOpLog[]>(appointmentsSrvUrl)
    .pipe(
      retry(5),
      catchError(this.handleError),
      );
  }
  handleError(error: HttpErrorResponse){
    return throwError(error);
  }
}
