import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import {DoctorModel} from '../../models/DoctorModel';
import {PatientModel} from '../../models/PatientModel';
import {DasDropDownListService} from '../../services/das-drop-down-list.service';
import {MatDatepickerInputEvent} from '@angular/material';
import {DasSimulatorService} from '../../services/das-simulator.service';
import {Appointment} from '../../models/Appointment';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-dastester',
  templateUrl: './dastester.component.html',
  styleUrls: ['./dastester.component.css']
})
export class DASTesterComponent implements OnInit {
  
  Doctors:DoctorModel[];
  Patients:PatientModel[];
  selectedDocotrID:string;
  selectedPatientID:string;
  selectedDate:Date;
  selectedHour:string;
  selectedminute:string;
  selectedToHour:string;
  selectedToMinute:string;
  minDate:Date = new Date();
  maxDate:Date = new Date();
  hours:string[]=['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
  minutes:string[]=['00','15','30','45'];
  //maxDate:Date = new Date().setDate(this.minDate.getDate()+30);
  
  

  constructor(private dropDownListService:DasDropDownListService,
    private dasSimulatorService:DasSimulatorService, private _snackBar: MatSnackBar) {
   
  }

  ngOnInit() {
    this.maxDate.setDate(this.minDate.getDate()+29);
    this.dropDownListService.getDoctors().subscribe(doctors => {
      this.Doctors = doctors;
    });
    this.dropDownListService.getPatients().subscribe(patients => {
      this.Patients = patients
    });
  }
  changeDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
  }

  openError(message:string,action:string='Error'){
    //let action:string ='';
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onClickResetBtn(){
    console.log('Reset Clicked');
    this.dasSimulatorService.resetMonitorApp().subscribe(out=>{
      console.log('DONE');
      
    },error =>{
      console.log('Error..............');
    });
   this.dasSimulatorService.resetCoreApp().subscribe(out=>{
      console.log('DONE');
      
    },error =>{
      console.log('Error..............');
    });
     this.openError('Database has been reset','');
  }
  onClickAddAppointmentBtn(){
    if (!this.selectedDocotrID){
      this.openError('Please select the Dcotor');
      return;
    }

    if (!this.selectedPatientID){
      this.openError('Please select the Patient');
      return
    }
    if (!this.selectedDate){
      this.openError('Please select the appointment date');
      return;
    }
    if (!this.selectedHour){
      this.openError('Please select FROM hour');
      return;
    }
    if (!this.selectedminute){
     this.selectedminute = '00'
    }
    if (!this.selectedToHour){
      this.openError('Please select TO hour');
      return;
    }
    if (!this.selectedToMinute){
     this.selectedToMinute = '00'
    }
    if (+this.selectedHour > +this.selectedToHour){
      this.openError('Selected To time should be after From time');
      return;
    }
    if (+this.selectedHour == +this.selectedToHour && +this.selectedminute > +this.selectedToMinute){
      this.openError('Selected To time should be after From time');
      return;
    }
    let appointment:Appointment=new Appointment();
    appointment.doctorId = this.selectedDocotrID;
    appointment.patientId = this.selectedPatientID;
    appointment.creationDateTime = new Date();
    this.selectedDate.setHours(+this.selectedHour);
    this.selectedDate.setMinutes(+this.selectedminute);
    appointment.fromDate = this.selectedDate;
    let toDate:Date = new Date();
    toDate.setDate(this.selectedDate.getDate());
    toDate.setMonth(this.selectedDate.getMonth());
    toDate.setFullYear(this.selectedDate.getFullYear());
    toDate.setHours(+this.selectedToHour);
    toDate.setMinutes(+this.selectedToMinute);
    appointment.toDate = toDate;
    

    console.log(appointment.fromDate);

    console.log(appointment.toDate);
    //this.dasSimulatorService.appointment=appointment;
    this.dasSimulatorService.createAppointment(appointment).subscribe(succss=>{
      console.log('success');
      this.openError('Appointment has been added successfully','Success');
    }, error=>{
      this.openError('Error');
    });
    

  }

}
