import {Component, OnInit, Input} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Subject, BehaviorSubject} from "rxjs";
import {MovieModel} from "./movie.model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  items: any;// :FirebaseListObservable
  newMovies: Subject<MovieModel> = new Subject();
  moviesFilters: BehaviorSubject<MovieModel> = new BehaviorSubject(new MovieModel());
  filters: any;

  constructor(af: AngularFire) {
    this.items = af.database.list('/movies');

    this.moviesFilters.subscribe((filters) => {
      this.filters = filters;
    });

    this.newMovies.subscribe((value) => {
        this.save(value);
    });
  }

  ngOnInit() {
  }

  private save(value: MovieModel) {
    this.items.push(value);
  }

  removeItem(key) {
    if (confirm('Are you sure?')) {
      this.items.remove(key);
    }
  }
}
