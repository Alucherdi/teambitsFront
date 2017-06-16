import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http"
import 'rxjs/Rx';

@Injectable()
export class MainService {

  LAST_NEWS_URL:string = "http://tb-teambitsserver.7e14.starter-us-west-2.openshiftapps.com/news";
  URL_NEW:string = "http://tb-teambitsserver.7e14.starter-us-west-2.openshiftapps.com/new?id=";

  LAST_NOTES_URL:string = "http://tb-teambitsserver.7e14.starter-us-west-2.openshiftapps.com/notes";
  URL_NOTE:string = "http://tb-teambitsserver.7e14.starter-us-west-2.openshiftapps.com/note?id=";

  REFERENCIAS_URL:string = "http://tb-teambitsserver.7e14.starter-us-west-2.openshiftapps.com/references";

  LOGIN_URL:string = "http://tb-teambitsserver.7e14.starter-us-west-2.openshiftapps.com/user/login";

  constructor( private http:Http ) { }

  getLastNews(){
    return this.http.get(this.LAST_NEWS_URL)
        .map( res=>res.json() );
  }
  getNew( id:string ){
    let url = `${ this.URL_NEW }${ id }`
    return this.http.get(url)
        .map ( res => res.json() );
  }

  //Notas de interes

  getLastNotes(){
    return this.http.get(this.LAST_NOTES_URL)
        .map( res=>res.json() );
  }

  getNote( id:string ){
    let url = `${ this.URL_NOTE }${ id }`
    return this.http.get(url)
        .map ( res => res.json() );
  }

  //Referencias

    getReferences(){
    return this.http.get(this.REFERENCIAS_URL)
        .map( res=>res.json() );
  }

  login(user:string , pass:string){

    let body = "name=" + user + "&password=" + pass ;
    let headers = new Headers({
      "Content-type": "application/x-www-form-urlencoded"
    })

    return this.http.post( this.LOGIN_URL, body, { headers } )
                .map( res => {
                  return res.json()
                } )
  }



}
