import { Component } from '@angular/core';

enum Couleur {Bleu = 10, Blanc, Rouge = 5, Noire};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'monApp';
  prenom = 'HB';
  Framework = "angular";
  monLien = "https://www.nike.com";
  monImage ="https://www.aprifel.com/wp-content/uploads/2019/02/mangue.jpg";


age:number = 2
a:Couleur = Couleur.Bleu;
b:Couleur = Couleur.Blanc;
taille:number | string =" 171";




afficheAge(){
  this.age = 50;
  alert(this.age);
  this.taille = 171;
}

additionner(a:number,b:number):number{
return a+b;
}


}

