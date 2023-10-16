import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private route:Router){}

  nom:string="";
  prenom:string="";
  objet:string="";
  message:string="";
  messageVide:string = "";
  messageLong :string ="";

  onSubmit(form:NgForm){
    if(form.valid){
      if(!form.value.nom || !form.value.prenom  || !form.value.objet  || !form.value.message  ){
        this.messageVide = "un des champs est vide"
      } else if(this.message.length <2 || this.message.length > 15){
        console.log(form.value.message.length);
       
      this.messageLong= "le message doit etre compris entre 10 et 20 caracteres";
    }else{
      this.route.navigate(['/'])
    
    }

  }
}


}
