import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpecialtyService } from '../../../core/services/specialty.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-specialty-form',
  standalone: true,
  imports: [ FormsModule,ReactiveFormsModule,MatFormFieldModule, MatInputModule],
  templateUrl: './specialty-form.component.html',
  styleUrl: './specialty-form.component.scss'
})
export class SpecialtyFormComponent {

  specialtyForm: FormGroup;
  specialtyService = inject(SpecialtyService);

  constructor(private formBuilder: FormBuilder) {
    this.specialtyForm = this.formBuilder.group({
      nombre: ['',Validators.required, Validators.minLength(3)],
      descripcion: ['', Validators.required]
    });
  }
}
