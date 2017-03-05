import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './component/home/home.component';
import { MoviesComponent } from './component/movies/movies.component';
import {mainRouting} from "./menu.routing";
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { SearchComponent } from './component/search/search.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "./utils/firebaseconfig";
import { IframeComponent } from './component/iframe/iframe.component';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviesListComponent,
    SearchComponent,
    IframeComponent,
    AddMovieComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(mainRouting),
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
