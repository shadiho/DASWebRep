import { Component, OnInit,Input } from '@angular/core';
import { AppointmensConflictModel } from '../../models/AppointmentsConflictModel'
@Component({
  selector: 'app-das-appointments-conflict-item',
  templateUrl: './das-appointments-conflict-item.component.html',
  styleUrls: ['./das-appointments-conflict-item.component.css']
})

export class DasAppointmentsConflictItemComponent implements OnInit {

  @Input() appointmentsConflictModel:AppointmensConflictModel;
  constructor() { }

  ngOnInit() {
       
  }

}
