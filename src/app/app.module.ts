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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChampionsContainerComponent
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
