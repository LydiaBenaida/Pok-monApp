import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../Pokemon";
import {ActivatedRoute, Router} from "@angular/router";
import {POKEMONS} from "../../shared/list.pokemons";
import { Location } from '@angular/common';
import {PokemonsService} from "../pokemons.service";
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  listOfPokemons: Pokemon[]=null;
  pokemonToDisplay: Pokemon=null;

  constructor( private route: ActivatedRoute,private router:Router, private  location:Location, private pokemonsService:PokemonsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.listOfPokemons=POKEMONS;
    for(let i=0; i<this.listOfPokemons.length;i++)
    {
      if(this.listOfPokemons[i].id === id){
        this.pokemonToDisplay = this.listOfPokemons[i];
      }
    }
    this.pokemonToDisplay = this.pokemonsService.getSinglePokemon(id);
  }
  returnBack():void{
    this.location.back()
  }
  edit(pokemon:Pokemon): void{
    //alert('vous avez sélectionné: ' + pokemon.name);
    const link=['/pokemon/edit',pokemon.id];
    this.router.navigate(link);

  }

  back():void{
    const link=['/pokemon'];
    this.router.navigate(link);
  }

}
