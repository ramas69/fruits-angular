import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeFruitComponent } from './liste-fruit/liste-fruit.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { UserComponent } from './user/user.component';
import { PokemoComponent } from './pokemo/pokemo.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';



const routes:Routes = [
{path:"", component:HomeComponent},
{path:"fruits", component:ListeFruitComponent},
{path:"pokemons", component:PokemoComponent},
{path:"users", component:UserComponent},
{path:"fruits/:id", component:FruitDetailComponent},
{path:"pokemons/:id", component:PokemonDetailComponent},




]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
