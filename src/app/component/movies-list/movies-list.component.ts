import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MovieModel} from "../movies/movie.model";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() items: {}[];
  @Input() filters: any;
  @Output() removeEvent: EventEmitter<any>;

  constructor() {
    this.removeEvent = new  EventEmitter();
  }

  ngOnInit() {
  }

  removeItem({$key}) {
    this.removeEvent.emit($key);
  }

}
