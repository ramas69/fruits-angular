import { Injectable } from '@angular/core';
import {fruitMock} from './fruit-mock';
import { IFruit } from './IFruit';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruits:IFruit[]= fruitMock;

  constructor() { }

  fetchAll(){
    return this.fruits;
  }

  fetchById(id:any):IFruit|undefined{
    return fruitMock[id];
  }

  deleteById(id:any){
  const index = fruitMock.findIndex((fruit)=> fruit.id === id)
 
    if(index !== -1){
    fruitMock.splice(index,1);
    }
  }

  newFruit(fruit:IFruit){
   // let id:number = this.fruits.length;
    fruitMock.push(fruit)
  }

}
