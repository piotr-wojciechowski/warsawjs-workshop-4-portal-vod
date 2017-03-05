import {Component, OnInit, Input} from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  items: any;// :FirebaseListObservable
  list: any;

  constructor(af: AngularFire) {
    this.items = af.database.list('/movies');
    // this.items.subscribe((response) => {
      // this.list = response;
        // debugger;
    // })
  }

  ngOnInit() {
  }

}
