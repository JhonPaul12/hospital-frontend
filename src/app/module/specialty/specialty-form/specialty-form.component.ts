import { Component, Inject, inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpecialtyService } from '../../../core/services/specialty.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OperationEnum } from '../../../shared/enum/operations.enum';
import { specialtyDTO } from '../../../core/dto/specialty.dto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';



@Component({
  selector: 'app-specialty-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule,MatButtonModule,MatDividerModule],
  templateUrl: './specialty-form.component.html',
  styleUrl: './specialty-form.component.scss'
})
export class SpecialtyFormComponent {

  specialtyForm: FormGroup;
  specialtyService = inject(SpecialtyService);

  idSpecialty: String | null = null;
  operation: String | null = null;
  operationType: typeof OperationEnum = OperationEnum;

  constructor(private formBuilder: FormBuilder, protected location: Location, private activateRoute: ActivatedRoute,@Optional() protected dialogRef:MatDialogRef<SpecialtyFormComponent>, @Optional() @Inject (MAT_DIALOG_DATA) data:specialtyDTO ) {
    this.specialtyForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required]
    });

    this.activateRoute.paramMap.subscribe(params => {
      this.idSpecialty = params.get('id');
      this.operation = params.get('operation');
    });
  }

  ngOnInit(): void {
    console.log('Executing ngOnInit')
    if (this.idSpecialty != null) {
      this.specialtyService.getSpecialtyById(+this.idSpecialty).subscribe({
        next: (data: specialtyDTO) => this.parseFormValue(data),
        error: (error) => console.error('Error fetching specialty:', error),
        complete: () => console.log('Specialty fetch complete')
      });
    } else {
      console.log('No hay especialidad relaciona a ese id');
    }
  }

  parseFormValue(specialtyDate: specialtyDTO) {
    this.specialtyForm.get('id')?.setValue(specialtyDate.id)
    this.specialtyForm.get('name')?.setValue(specialtyDate.name)
    this.specialtyForm.get('description')?.setValue(specialtyDate.description)
  }

  updateSpecialty() {
    const specialty: specialtyDTO = {
      name: this.specialtyForm.get('name')?.value,
      description: this.specialtyForm.get('description')?.value
    }
    this.specialtyService.updateSpecialty(this.specialtyId, specialty).subscribe({
      next: (data: specialtyDTO) => this.location.back(),
      error: (error) => console.error('Error fetching specialty:', error),
      complete: () => console.log('Specialty fetch complete')
    });
  }

  get specialtyId(): number {
    return this.specialtyForm.get('id')?.value
  }

  createSpecialty(){
    const specialty: specialtyDTO = {
      name: this.specialtyForm.get('name')?.value,
      description: this.specialtyForm.get('description')?.value
    }
    this.specialtyService.createSpecialty(specialty).subscribe({
      next: (data: specialtyDTO) => this.dialogRef.close(true),
      error: (error) => console.error('Error fetching specialty:', error),
      complete: () => console.log('Specialty fetch complete')
    });
  }
}
