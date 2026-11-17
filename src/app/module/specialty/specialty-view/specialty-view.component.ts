import { Component } from '@angular/core';
import { specialtyDTO } from '../../../core/dto/specialty.dto';
import { OperationEnum } from '../../../shared/enum/operations.enum';
import { SpecialtyService } from '../../../core/services/specialty.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-specialty-view',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatIconModule],
  templateUrl: './specialty-view.component.html',
  styleUrl: './specialty-view.component.scss'
})
export class SpecialtyViewComponent{
  specialty: specialtyDTO = {} as specialtyDTO;
  idSpecialty: String | null = null;
  operation: String | null = null;
  operationType: typeof OperationEnum = OperationEnum;

  constructor(private specialtyService: SpecialtyService, protected location: Location, private activateRoute: ActivatedRoute) {
    console.log ('Executing constructor')
    this.activateRoute.paramMap.subscribe(params => {
      this.idSpecialty = params.get('id');
      this.operation = params.get('operation');
    });
  }

  ngOnInit(): void {
    console.log ('Executing ngOnInit')
    if (this.idSpecialty != null) {
      this.specialtyService.getSpecialtyById(+this.idSpecialty).subscribe({
        next: (data: specialtyDTO) => this.specialty = data,
        error: (error) => console.error('Error fetching specialty:', error),
        complete: () => console.log('Specialty fetch complete')
      });
    }else {
      console.log('No specialty ID provided, initializing new specialty');
    }
  }

  ngAfterViewInit(): void {
    console.log ('Executing ngAfterViewInit')
  }


  deleteSpecialty(): void {
    if (this.idSpecialty != null) {
      this.specialtyService.deleteSpecialty(+this.idSpecialty).subscribe({
        next: (data: specialtyDTO) => {
          console.log('Specialty deleted successfully:', data);
          this.location.back();
        },
        error: (error) => console.error('Error deleting specialty:', error),
        complete: () => console.log('Specialty deletion complete')
      });
    } else {
      console.error('No specialty ID provided for deletion');
    }
  }

  get validOperation(): number {
    if (this.operation != null) {
      return +this.operation
    }else {
      return 0
    }
  }

}
