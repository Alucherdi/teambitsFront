import { Component, OnInit } from '@angular/core';
import { MainService } from "app/services/main.service"

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {

  references:any[] = [];

  constructor( private _mainService: MainService ) { 

    this._mainService.getReferences()
        .subscribe( data => {
          this.references = data;
        } )

  }

  ngOnInit() {
  }

}
