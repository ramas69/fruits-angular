import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-fruit',
  templateUrl: './create-fruit.component.html',
  styleUrls: ['./create-fruit.component.css']
})
export class CreateFruitComponent {

  titre:string="mangue";
  image:string="";
  email:string="";
  password:string="";
  messageEmail:string ="";
  messagePassword:string = ""

  onSubmit(form:NgForm){
    console.log(form.value);
  }

  envoiForm(formI:NgForm){
    if(formI.valid){
      if(formI.value.email == ""  ){
        this.messageEmail = "c'est vide";
        console.log("test");
  
      }
      if(formI.value.password == ""  ){
        this.messagePassword = "c'est vide";
        console.log("test");
  
      } else if(formI.value.password.length <=2 ){
        this.messagePassword= "c'est court";
      
      }

    }

  }
    



}


// un 2eme formulaire =>  email et password
// envoyé les données 
// si c'est vide un message en dessous du champs => "c'est vide"
// si la longueur du mdp est < 2 => c'est trop court
// form.valid , form.reset


