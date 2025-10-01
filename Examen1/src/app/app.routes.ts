import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'details', loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent) },
  { path: '', redirectTo: '', pathMatch: 'full' }
];
