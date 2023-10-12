import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { IFruit } from '../IFruit';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 constructor( private fruitService: FruitService, private route:ActivatedRoute){}

  produits:IFruit[]=[ ];

  ngOnInit(): void {
    this.produits = this.fruitService.fetchAll();
  }

  deleteFruit(id:any){
    this.fruitService.deleteById(id)// index, element à supprimer
    
  }





}
