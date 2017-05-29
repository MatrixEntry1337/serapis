import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChampionContainerComponent } from './champion/champion.container';
import { ChampionService } from './champion/champion.service';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home-section.component';
import {ChampionTagListComponent} from './champion/champion-tag-list/champion-tag-list.component';
import {ChampionLoreComponent} from './champion/champion-lore/champion-lore.component';
import {ChampionSkinsComponent} from './champion/champion-skins/champion-skins.component';
import {ChampionStatsComponent} from './champion/champion-stats/champion-stats.component';
import {ChampionListComponent} from './champion/champion-list/champion-list.component';
import {ChampionSpellsComponent} from './champion/champion-spells/champion-spells.component';
import {TagPipe} from './pipes/tag.pipe';
import {ItemContainerComponent} from './item/item.container.component';
import {ItemStatsComponent} from './item/item-stats/item-stats.component';
import {ItemListsComponent} from './item/item-lists/item-lists.component';
import {ObjectValuesPipe} from './pipes/object-values.pipe';
import {ItemService} from './item/item.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChampionContainerComponent,
    ChampionTagListComponent,
    ChampionLoreComponent,
    ChampionSkinsComponent,
    ChampionStatsComponent,
    ChampionListComponent,
    ChampionSpellsComponent,
    ItemContainerComponent,
    ItemListsComponent,
    ItemStatsComponent,
    TagPipe,
    ObjectValuesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [
    ChampionService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
