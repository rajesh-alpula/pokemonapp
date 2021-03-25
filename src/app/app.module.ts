import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogService} from 'primeng/dynamicdialog';

import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonService } from '../services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [PokemonService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
