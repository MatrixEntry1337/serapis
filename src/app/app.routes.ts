import { Routes } from '@angular/router';
import {ChampionsContainerComponent} from './champion/champions-section.component';
import {HomeComponent} from './home/home-section.component';

export const rootRouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'champions', component: ChampionsContainerComponent},
];

