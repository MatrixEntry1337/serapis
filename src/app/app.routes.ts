import {ChampionContainerComponent} from './champion/champion.container';
import {HomeComponent} from './home/home-section.component';
import {ItemContainerComponent} from './item/item.container.component';

export const rootRouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'champions', component: ChampionContainerComponent},
  {path: 'items', component: ItemContainerComponent}
];
