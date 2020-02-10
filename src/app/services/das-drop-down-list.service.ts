import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule,HttpErrorResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs';  
import {DoctorModel} from '../models/DoctorModel';
import {PatientModel} from '../models/PatientModel';
import { catchError, retry } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DasDropDownListService {
  doctorsSrvUrl:string = 'http://ec2-18-188-77-96.us-east-2.compute.amazonaws.com/api/v1/DoctorsController/GetDoctors';
  patientsSrvUrl:string = 'http://ec2-18-188-77-96.us-east-2.compute.amazonaws.com/api/v1/PatientsController/GetPatients';
  constructor(private http:HttpClient) { }
  getDoctors():Observable<DoctorModel[]>{
    return this.http.get<DoctorModel[]>(this.doctorsSrvUrl)
    .pipe(
      retry(5)
      )
    ;
  }
  getPatients():Observable<PatientModel[]>{
    return this.http.get<PatientModel[]>(this.patientsSrvUrl)
    .pipe(
      retry(5)
      )
    ;
  }
}
