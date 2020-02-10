import { Injectable } from '@angular/core';
import {AppointmentOpLog} from '../models/Appointment-op-log';
import {HttpClient, HttpHeaders, HttpClientModule,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DasAppointmentOpLogService {

  appointmentOpLogsSrvUrl:string ='http://ec2-18-188-77-96.us-east-2.compute.amazonaws.com/api/v1/AppointmentsOpLog/GetAppointmentsOpLogs';
  appointmentopLogs:AppointmentOpLog[];
  constructor(private http:HttpClient) { }
  getAppointmentOpLogs():Observable<AppointmentOpLog[]>{
    return this.http.get<AppointmentOpLog[]>(this.appointmentOpLogsSrvUrl)
    .pipe(
      retry(5),
      catchError(this.handleError),
      )
    ;
  }
  handleError(error: HttpErrorResponse){
    return throwError(error);
  }
}
