import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../Pokemon";
import {PokemonsService} from "../pokemons.service";
import {ActivatedRoute} from "@angular/router";
import {POKEMONS} from "../../shared/list.pokemons";

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {

  singlePkemon : Pokemon = new Pokemon();

  constructor(private pokemonsService:PokemonsService,private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.singlePkemon = this.pokemonsService.getSinglePokemon(id);
    console.log('vous a vez selectione le pokemon: ', this.singlePkemon.name)
  }

}
