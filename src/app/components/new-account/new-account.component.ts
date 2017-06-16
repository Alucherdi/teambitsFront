import { Component, } from '@angular/core';
import { Utils } from '../../utils'
import { Router } from '@angular/router';

let utils = new Utils();



@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})

export class NewAccountComponent {
  constructor(private router:Router){
    console.log(this.error);
  }
  error:string = "Revisa de nuevo los campos"
  isError:boolean = false;
  setNewAccount(nombre:string , email:string, pass:string){
    console.log(name , email, pass); 
    var obj = {
      name: nombre,
      email: email,
      password: pass
    }

    fetch("https://teambits-alucherdi.c9users.io/user/insert" , {
      method: "POST",
      body: utils.objToBody(obj) ,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    }).then(function(res){
      return res.text()
    }).then(function(data){
      alert(data)
      this.isError = true;
    })
    
  }

  login(){
    this.router.navigate( ['login'] );
  }

} 

