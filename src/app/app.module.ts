import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
import { MainService } from "app/services/main.service"
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosYProyectosComponent } from './components/productos-yproyectos/productos-yproyectos.component';
import { BolsaComponent } from './components/bolsa/bolsa.component';
import { CardwimgComponent } from './components/shared/cardwimg/cardwimg.component';
import { NewscardComponent } from './components/shared/newscard/newscard.component';
import { ReferencecardComponent } from './components/shared/referencecard/referencecard.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { TextinputComponent } from './components/shared/textinput/textinput.component';
import { CapacitacionComponent } from './components/capacitacion/capacitacion.component';
import { OutsourcingComponent } from './components/outsourcing/outsourcing.component';
import { DesarrolloComponent } from './components/desarrollo/desarrollo.component';
import { CommentBoxComponent } from './components/shared/comment-box/comment-box.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { ErpComponent } from './components/erp/erp.component';
import { ShareArticleComponent } from './components/shared/share-article/share-article.component';
import { LoginComponent } from './components/login/login.component';
import { NotasDeInteresComponent } from './components/shared/notas-de-interes/notas-de-interes.component';
import { ReferenciasComponent } from './components/shared/referencias/referencias.component';
import { ViewNewsComponent } from './components/view-news/view-news.component';
import { ViewNotesComponent } from './components/view-notes/view-notes.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiciosComponent,
    ProductosYProyectosComponent,
    BolsaComponent,
    CardwimgComponent,
    NewscardComponent,
    ReferencecardComponent,
    CarouselComponent,
    TextinputComponent,
    CapacitacionComponent,
    OutsourcingComponent,
    DesarrolloComponent,
    CommentBoxComponent,
    NewAccountComponent,
    ErpComponent,
    ShareArticleComponent,
    LoginComponent,
    NotasDeInteresComponent,
    ReferenciasComponent,
    ViewNewsComponent,
    ViewNotesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
