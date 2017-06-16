import { Component, OnInit } from '@angular/core';
import { MainService } from "app/services/main.service"

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {

  news:any[] = []

  constructor(private _mainService:MainService) { 
    this._mainService.getLastNews()
        .subscribe( data => {
          console.log(data);
          this.news = data;
        } )
  }

  ngOnInit() {
  }

}
