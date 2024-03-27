import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import ListComponent from './client/list/list.component';
import RegisterComponent from './client/register/register.component';
import ModifyComponent from './client/modify/modify.component';

export const routes: Routes = [
/*    
    {path: 'cadastro', component: RegisterComponent},
    {path: 'lista', component: ListComponent},
    {path: 'atualiza', component: ModifyComponent}
*/

   {path: '', component: HomeComponent},
   {path: 'cadastro', component: RegisterComponent},
   {path: 'lista', component: ListComponent},
   
{
    path: '',
    loadComponent: () => import('./client/list/list.component')
  },

  {
    path: 'cadastro',
    loadComponent: () => import('./client/register/register.component')
  },

  {
    path: 'lista/:id/edit',
    loadComponent: () => import('./client/register/register.component')
  }
];
