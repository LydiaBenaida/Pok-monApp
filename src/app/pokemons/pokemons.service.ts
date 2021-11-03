import { Injectable } from '@angular/core';
import {Pokemon} from "../Pokemon";
import {POKEMONS} from "../shared/list.pokemons";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  getListPokemons() : Pokemon[]{
    return POKEMONS;
  }

  getSinglePokemon(id: number) : Pokemon{
    const listPkm = this.getListPokemons();

    for(let i = 0; i < listPkm.length; i++){
      if(id === listPkm[i].id){
        return listPkm[i];
      }
    }
  }
  getPokemonsTypes(): string[]{
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }
}
