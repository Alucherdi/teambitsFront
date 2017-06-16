import { Component, OnInit } from '@angular/core';
import { MainService } from "app/services/main.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _mainService:MainService) { }

  ngOnInit() {
  }

  login(username:string , password:string){
    console.log(username, password);
    this._mainService.login(username , password)
        .subscribe( data => {
          console.log(data)
        } )
  }

}
