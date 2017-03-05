import {Routes} from "@angular/router"
import {HomeComponent} from "./component/home/home.component";
import {MoviesComponent} from "./component/movies/movies.component";

export const  mainRouting: Routes = [
  {path: "home", component: HomeComponent},
  {path: "movies", component: MoviesComponent}
];
