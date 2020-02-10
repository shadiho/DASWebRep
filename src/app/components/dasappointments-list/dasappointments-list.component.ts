import { Component, OnInit } from '@angular/core';
import {DasDropDownListService} from '../../services/das-drop-down-list.service';
import {DasAppointmentsService} from '../../services/das-appointments.service';
import {DoctorModel} from '../../models/DoctorModel';
import {PatientModel} from '../../models/PatientModel';
import {MatSnackBar} from '@angular/material';
import { AppointmentOpLog } from 'src/app/models/Appointment-op-log';
@Component({
  selector: 'app-dasappointments-list',
  templateUrl: './dasappointments-list.component.html',
  styleUrls: ['./dasappointments-list.component.css']
})
export class DasappointmentsListComponent implements OnInit {

  Doctors:DoctorModel[];
  Patients:PatientModel[];
  selectedDocotrID:string;
  selectedPatientID:string;
  appointmentsOpLogs:AppointmentOpLog[];

  constructor(private dropDownListService:DasDropDownListService, 
    private _snackBar: MatSnackBar, private dasAppointmentService:DasAppointmentsService) { }

  openError(message:string,action:string='Error'){
    //let action:string ='';
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.dropDownListService.getDoctors().subscribe(doctors => {
      this.Doctors = doctors;
    });
    this.dropDownListService.getPatients().subscribe(patients => {
      this.Patients = patients
    });
  }

  onClickSearchAppointmentBtn(){
   
    this.dasAppointmentService.getAppointmentsList(this.selectedDocotrID,this.selectedPatientID).subscribe(
      appointmentOpLogs=>{
        this.appointmentsOpLogs = [];
        this.appointmentsOpLogs = appointmentOpLogs;
        console.log("search success");
      },error=>{
        this.openError('Error While Search');
      }
    );

  }

  

}
