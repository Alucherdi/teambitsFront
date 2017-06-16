import { Component, OnInit } from '@angular/core';
import { MainService } from "app/services/main.service"

@Component({
  selector: 'app-notas-de-interes',
  templateUrl: './notas-de-interes.component.html',
  styleUrls: ['./notas-de-interes.component.css']
})
export class NotasDeInteresComponent implements OnInit {

  notes:any[] = []

  constructor( private _mainService: MainService ) { 

    this._mainService.getLastNotes()
        .subscribe( data => {
          this.notes = data;
          console.log(data.image)
        } )

  }

  ngOnInit() {
  }

}
