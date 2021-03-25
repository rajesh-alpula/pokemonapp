import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class PokemonService {

  private pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private httpClient : HttpClient) { }

  public getListOfPokemon(limit: string, offset ?: string) {
    const params = new HttpParams()
      .set('offset', offset ? offset : '0')
      .set('limit', limit);
    return this.httpClient
      .get<any>(`${this.pokemonUrl}`, { observe: 'response', params: params })
      ;
  }

  public getPokemonDetails(urlList: Array<any>) {
    urlList = urlList.map(url => this.httpClient.get<any>(url));
    return forkJoin(urlList);
  }   
}
