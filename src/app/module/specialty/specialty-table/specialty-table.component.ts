import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SpecialtyService } from '../../../core/services/specialty.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { specialtyDTO } from '../../../core/dto/specialty.dto';
import { MatIcon } from '@angular/material/icon';
import { OperationEnum } from '../../../shared/enum/operations.enum';
import { Router } from '@angular/router';


@Component({
  selector: 'app-specialty-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatIcon],
  templateUrl: './specialty-table.component.html',
  styleUrl: './specialty-table.component.scss'
})
export class SpecialtyTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'acciones'];
  dataSource = new MatTableDataSource<specialtyDTO>();
  operationType: typeof OperationEnum = OperationEnum;

  constructor(private especialidadService: SpecialtyService, private router: Router) { }
  ngOnInit(): void {
    this.getSpecialties();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  getSpecialties() {
    this.especialidadService.getSpecialties().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching specialties:', error);
      }
    })
  }

  operation(id: number, operationEnum: number) {
    console.log('Operation:', operationEnum, 'ID:', id);
    switch (operationEnum) {
      case OperationEnum.CREATE:
      case OperationEnum.UPDATE:
        this.router.navigate(['/especialidades/form', id, 'operation', operationEnum]);
        break;
      case OperationEnum.READ:
      case OperationEnum.DELETE:
        this.router.navigate(['/especialidades/view', id, 'operation', OperationEnum.READ]);
        break;
      default: new Error('Operacion invalida');
    }
  }
}



