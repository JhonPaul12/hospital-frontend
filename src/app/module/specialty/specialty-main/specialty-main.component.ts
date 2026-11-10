import { Component } from '@angular/core';
import { SpecialtyComponent } from '../specialty.component';
import { SpecialtyTableComponent } from '../specialty-table/specialty-table.component';


@Component({
  selector: 'app-specialty-main',
  standalone: true,
  imports: [ SpecialtyTableComponent],
  templateUrl: './specialty-main.component.html',
  styleUrl: './specialty-main.component.scss'
})
export class SpecialtyMainComponent {

}
