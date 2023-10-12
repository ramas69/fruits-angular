import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeFruitComponent } from './liste-fruit/liste-fruit.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';



const routes:Routes = [
{path:"", component:HomeComponent},
{path:"fruits", component:ListeFruitComponent},
{path:"fruits/:id", component:FruitDetailComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }