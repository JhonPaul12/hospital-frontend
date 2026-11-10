import { Routes } from '@angular/router';
import { SpecialtyMainComponent } from './module/specialty/specialty-main/specialty-main.component';
import { SpecialtyFormComponent } from './module/specialty/specialty-form/specialty-form.component';
import { MainComponent } from './shared/main/main.component';
import { UserComponent } from './module/user/user.component';
import { SpecialtyComponent } from './module/specialty/specialty.component';
import { LoginComponent } from './module/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'especialidades',
        component: SpecialtyComponent,
        children: [
          {
            path: '',
            component: SpecialtyMainComponent
          },
          {
            path: 'tabla',
            component: SpecialtyFormComponent
          },
          {
            path: 'form',
            component: SpecialtyFormComponent
          }
        ]
      },
      {
        path: 'usuario',
        component: UserComponent
      }
    ]
  },
  // localhost:4200/  -> login ->  Guards
  {
    path: 'login',
    component: LoginComponent
  }
];
