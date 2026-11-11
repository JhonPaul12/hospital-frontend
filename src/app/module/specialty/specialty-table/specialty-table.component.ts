import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SpecialtyService } from '../../../core/services/specialty.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { specialtyDTO } from '../../../core/dto/specialty.dto';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-specialty-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatIcon],
  templateUrl: './specialty-table.component.html',
  styleUrl: './specialty-table.component.scss'
})
export class SpecialtyTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones'];
  dataSource = new MatTableDataSource<specialtyDTO>();

  constructor(private especialidadService: SpecialtyService) { }
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
}



