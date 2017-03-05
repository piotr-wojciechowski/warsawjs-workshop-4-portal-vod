import {Component, OnInit, Input} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MovieModel} from "../movies/movie.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() options: string;
  @Input() filters: BehaviorSubject<MovieModel>;

  constructor() { }

  ngOnInit() {
  }

  updateFilters(target) {
    let search = {};
    search[target.name] = target.value;
    this.filters.next(Object.assign({}, this.filters.value, search));
  }

}
