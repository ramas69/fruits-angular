import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private service:UserService){}

  users:IUser[]= [];

  ngOnInit(){
      this.getUser();
  }

  getUser(){
    this.service.fetchAll().subscribe(data => {
      this.users = data;
      return this.users;
    })
  }


}
