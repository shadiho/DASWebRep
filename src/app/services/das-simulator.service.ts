import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule,HttpErrorResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs';  
import {Appointment} from '../models/Appointment';

const httpOptions={
  headers: new HttpHeaders({
  'content-type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DasSimulatorService {
  appointment:Appointment;
  appointmentCreationSrvUrl:string = 'http://ec2-3-15-143-140.us-east-2.compute.amazonaws.com/api/v1/appointments/Book';
  appointmentCancelationSrvUrl:string = 'http://ec2-3-15-143-140.us-east-2.compute.amazonaws.com/api/v1/appointments/Cancel';
  resetCoreDatebaseSrvUrl:string = 'http://ec2-3-15-143-140.us-east-2.compute.amazonaws.com/api/v1/appointments/ResetApp';
  resetMonitorDatebaseSrvUrl:string= 'http://ec2-18-188-77-96.us-east-2.compute.amazonaws.com/api/v1/AppointmentsController/DeleteAll';
  constructor(private http:HttpClient) { }
  createAppointment(appointment:Appointment):Observable<any>{
    return this.http.post(this.appointmentCreationSrvUrl,appointment,httpOptions);
  }
  cancelAppointment(appointment:Appointment):Observable<any>{
    
    return this.http.post(this.appointmentCancelationSrvUrl,appointment,httpOptions);
  }
  resetCoreApp():Observable<any>{
    console.log('Reset is being called');
    return this.http.post(this.resetCoreDatebaseSrvUrl,httpOptions);
  }
  resetMonitorApp():Observable<any>{
    console.log('Reset is being called');
    return this.http.get(this.resetMonitorDatebaseSrvUrl);
  }
}
