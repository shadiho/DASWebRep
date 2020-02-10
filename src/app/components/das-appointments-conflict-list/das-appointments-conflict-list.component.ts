import { Component, OnInit } from '@angular/core';
import { DasAppointmentsConflictService } from '../../services/das-appointments-conflict.service';
import { AppointmensConflictModel } from 'src/app/models/AppointmentsConflictModel';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap, catchError, retry} from "rxjs/operators";
import { throwError, empty } from 'rxjs';

@Component({
  selector: 'app-das-appointments-conflict-list',
  templateUrl: './das-appointments-conflict-list.component.html',
  styleUrls: ['./das-appointments-conflict-list.component.css']
})
export class DasAppointmentsConflictListComponent implements OnInit {
  appointmentsConflicts:AppointmensConflictModel[];
  isError:boolean=false;
  constructor(private dasAppointmentsConflictService:DasAppointmentsConflictService) {

   }

  ngOnInit() {
    try {
      interval(3000)
      .pipe(
        startWith(0),
        catchError(this.handleError),
        switchMap(() => this.dasAppointmentsConflictService.getAppointmentsConflict()
          .pipe(catchError((error)=>{
            this.isError=true;
            this.appointmentsConflicts = [];
            return empty();}))
        ),
        )
      .subscribe(appointmentsConflicts=>{
        this.isError = false;
        this.appointmentsConflicts = appointmentsConflicts;
       
      },err=>{this.appointmentsConflicts=[]} );
    } catch (error) {
          
    }

  }

  handleError(error){
    this.appointmentsConflicts = [];
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







