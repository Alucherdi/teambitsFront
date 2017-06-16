import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MainService } from "app/services/main.service"

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  data:any = {
    title: "",
    content: ""
  }
  id:string;
  constructor(private route:ActivatedRoute,
              private _mainService:MainService) { 

    this.route.params
        .subscribe( parametros => {
          this.id = parametros['id']
          this._mainService.getNew(this.id)
              .subscribe( data => {
                console.log(data);
                this.data = data;
              } )
        } );

  }

  ngOnInit() {
  }

}
