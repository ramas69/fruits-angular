import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-fruit-reactive',
  templateUrl: './create-fruit-reactive.component.html',
  styleUrls: ['./create-fruit-reactive.component.css']
})
export class CreateFruitReactiveComponent {

  public form:FormGroup = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),

  })


  onSubmit(){
    
    console.log( this.form.value.name);
    console.log( this.form.value.image);
  }
}
