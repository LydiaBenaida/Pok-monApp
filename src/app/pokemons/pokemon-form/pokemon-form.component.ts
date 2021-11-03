import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../Pokemon";
import {Router} from "@angular/router";
import {PokemonsService} from "../pokemons.service";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  types:Array<string>;
  @Input() pokemon : Pokemon; //Prop d'entrée du composant



  constructor(private router:Router,private pokemonService:PokemonsService) { }

  ngOnInit(): void {
    this.types=this.pokemonService.getPokemonsTypes();
  }

  hasType(type:string):boolean{
    const index = this.pokemon.types.indexOf(type);
    return (index > -1) ? true :false;
  }

  selectType($event: any, type: string) : void{
    const  checked = $event.target.checked;
    if(checked){
      this.pokemon.types.push(type);
    }else{
      const index = this.pokemon.types.indexOf(type);
      if(index < -1){
        this.pokemon.types.splice(index, 1)
      }
    }
  }

  onSubmit(): void{
    console.log('submit form');
    const link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }
}
