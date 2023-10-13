import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListeFruitComponent } from './liste-fruit/liste-fruit.component';
import { AppRoutingModule } from './app-routing.module';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { UserComponent } from './user/user.component';
import { PokemoComponent } from './pokemo/pokemo.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListeFruitComponent,
    FruitDetailComponent,
    UserComponent,
    PokemoComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
