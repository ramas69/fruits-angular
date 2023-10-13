import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from '../IPokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon:IPokemon | undefined;
  constructor(private service:PokemonService, private route: ActivatedRoute){}

  

  ngOnInit(): void {
      
    this.route.params.subscribe(params => {
      this.service.fetchOne(params['id']).subscribe(data => {
        this.pokemon = data;
      })
    })
  }


}
