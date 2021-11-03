import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {BordCardDirective} from "../shared/directives/bord-card.directive";
import {PokemonTypeColorPipe} from "../shared/pipes/pokemon-type-color.pipe";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {PageNotFoundComponent} from "../shared/page-not-found/page-not-found.component";
import {PokemonFormComponent} from "./pokemon-form/pokemon-form.component";
import {FormsModule} from "@angular/forms";
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';



@NgModule({
  declarations: [
    ListPokemonComponent, BordCardDirective, PokemonTypeColorPipe, DetailPokemonComponent, PageNotFoundComponent,PokemonFormComponent, PokemonEditComponent

  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class PokemonsModule { }
