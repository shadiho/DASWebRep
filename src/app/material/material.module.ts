import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatSnackBarModule,
  MatCardModule
} from '@angular/material';

const MaterialComponents = [MatButtonModule];
@NgModule({
  imports: [
    MaterialComponents,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports:[MaterialComponents,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatSnackBarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
