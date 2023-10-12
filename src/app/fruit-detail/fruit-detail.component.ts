import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { ActivatedRoute } from '@angular/router';
import { IFruit } from '../IFruit';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit{

  constructor( private fruitService: FruitService, private route:ActivatedRoute){}

  fruit:IFruit| undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const fruitdId = +params['id'];
      this.fruit = this.fruitService.fetchById(fruitdId-1)
    })
  }
  

}
