import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { IFruit } from '../IFruit';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 constructor( private fruitService: FruitService, private route:ActivatedRoute){}

  produits:IFruit[]=[ ];

  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    image: new FormControl('')
  })

  ngOnInit(): void {
    this.produits = this.fruitService.fetchAll();
  }

  deleteFruit(id:any){
    this.fruitService.deleteById(id)// index, element à supprimer
    
  }

  onSubmit(){
    this.fruitService.newFruit(this.form.value) //ajout d'un nouveau produit dans la liste des fruits
    console.log(this.form.value)
  }







}
