import { Routes } from '@angular/router';
import { SpecialtyMainComponent } from './module/specialty/specialty-main/specialty-main.component';
import { SpecialtyFormComponent } from './module/specialty/specialty-form/specialty-form.component';
import { MenubarComponent } from './shared/menubar/menubar.component';

export const routes: Routes = [
  {
    path: 'especialidades',
    // component: SpecialtyMainComponent,
    children: [
      {
        path: '',
        component: SpecialtyMainComponent
      },
      {
        path: 'tabla',
        component: SpecialtyFormComponent
      }
    ]
  },
  {
    path: '',
    component: MenubarComponent
  }
];
