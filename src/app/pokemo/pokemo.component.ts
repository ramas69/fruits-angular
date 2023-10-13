import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../IPokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemo',
  templateUrl: './pokemo.component.html',
  styleUrls: ['./pokemo.component.css']
})
export class PokemoComponent implements OnInit {

  constructor(private service: PokemonService){}

  pokemons:IPokemon[]=[];

  ngOnInit(): void {
      this.getPokemons();
  }

  getPokemons(){
    this.service.fetchAll().subscribe(data =>{
      this.pokemons = data;
      return this.pokemons;
   
    });
  }

}
