import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChampionsContainerComponent } from './champion/champions-section.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChampionsContainerComponent,
    ChampionTagListComponent,
    ChampionLoreComponent,
    ChampionSkinsComponent,
    ChampionStatsComponent,
    ChampionListComponent,
    ChampionSpellsComponent,
    TagPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [
    ChampionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
