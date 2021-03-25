import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service'
import { DialogService } from 'primeng/dynamicdialog';
import {LazyLoadEvent} from 'primeng/api';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemanList = [];
  pokemonSelected: any;

  constructor(private pokemonService :PokemonService, public dialogService: DialogService) { }  

  ngOnInit(){
    this.getPokemonList('20');
  }

  private getPokemonList(limit: string, offset ?: string) {
    this.pokemonService.getListOfPokemon(limit, offset).subscribe(
      response => { 
        if(response && response.body && response.body.results){
          let pokemons = response.body.results;
          this.getPokemonDetails(pokemons.map(response => response.url)); 
        }
      },
      error => { console.error(error); }
    );
  }

  private getPokemonDetails(urlList: Array<string>) {
    this.pokemonService.getPokemonDetails(urlList).subscribe(
      response => { this.pokemanList = response; },
      error => { console.error(error); }
    );
  }

  onRowSelect(event) {
    const ref = this.dialogService.open(PokemonDetailsComponent, {
      data: {pokemon: event.data},
      header: 'Pokemon Details',
      width: '70%',
      baseZIndex: 10000
    });
  }


loadPokemonLazy(event: LazyLoadEvent) {       
  //simulate remote connection with a timeout 
  setTimeout(() => {
    this.getPokemonList(event.rows.toString(), event.first.toString());      
  }, Math.random() * 1000 + 250);
}


}
