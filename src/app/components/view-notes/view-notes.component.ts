import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MainService } from "app/services/main.service"

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {

   data:any = {
    title:"",
    content:"",
    image:""
  }
  id:string;


  constructor(private route:ActivatedRoute,
              private _mainService:MainService) { 

                  this.route.params
                  .subscribe( parametros => {
                    this.id = parametros['id']
                    this._mainService.getNote(this.id)
                        .subscribe( data => {
                          console.log(data);
                          this.data = data;
                        } )
                  } );

              }

  ngOnInit() {
  }

}
