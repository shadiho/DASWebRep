import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DASTesterComponent } from './components/dastester/dastester.component';
import { DASAppointmentLogComponent } from './components/dasappointment-log/dasappointment-log.component';
import { DASAppointmentOpLogItemComponent } from './components/dasappointment-op-log-item/dasappointment-op-log-item.component';
import { TabModule } from 'angular-tabs-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DasappointmentComponent } from './components/dasappointment/dasappointment.component';
import { DasappointmentsListComponent } from './components/dasappointments-list/dasappointments-list.component';
import { DasAppointmentsConflictItemComponent } from './components/das-appointments-conflict-item/das-appointments-conflict-item.component';
import { DasAppointmentsConflictListComponent } from './components/das-appointments-conflict-list/das-appointments-conflict-list.component';
@NgModule({
  declarations: [
    AppComponent,
    DASTesterComponent,
    DASAppointmentLogComponent,
    DASAppointmentOpLogItemComponent,
    DasappointmentComponent,
    DasappointmentsListComponent,
    DasAppointmentsConflictItemComponent,
    DasAppointmentsConflictListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
