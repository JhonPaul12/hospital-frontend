import { Component, signal } from '@angular/core';
import { SpecialtyComponent } from '../specialty.component';
import { SpecialtyTableComponent } from '../specialty-table/specialty-table.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { SpecialtyFormComponent } from '../specialty-form/specialty-form.component';

@Component({
  selector: 'app-specialty-main',
  standalone: true,
  imports: [ SpecialtyTableComponent,CommonModule,MatButtonModule,],
  templateUrl: './specialty-main.component.html',
  styleUrl: './specialty-main.component.scss'
})
export class SpecialtyMainComponent {
  createdData = signal<boolean>(false)
  constructor(private matDialog:MatDialog){

  }

  createSpecialty(){
    const dialogRef = this.matDialog.open(SpecialtyFormComponent,{})
    dialogRef.afterClosed().subscribe((response:boolean) =>{
      if(response){
        this.createdData.set(response)
      }else{
        this.createdData.set(false)
      }
    })
  }
}
