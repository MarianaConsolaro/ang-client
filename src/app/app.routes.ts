import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
/*    
    {path: 'cadastro', component: RegisterComponent},
    {path: 'lista', component: ListComponent},
    {path: 'atualiza', component: ModifyComponent}
*/

   {path: '', component: HomeComponent},
   
{
    path: 'lista',
    loadComponent: () => import('./client/list/list.component')
  },

  {
    path: 'cadastro',
    loadComponent: () => import('./client/register/register.component')
  },

  {
    path: ':id/modify',
    loadComponent: () => import('./client/modify/modify.component')
  }
];
