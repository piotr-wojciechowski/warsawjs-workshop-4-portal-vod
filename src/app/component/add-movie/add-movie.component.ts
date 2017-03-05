import {Component, OnInit, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MovieModel} from "../movies/movie.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() newMovies: Subject<any>;
  myModal: any;

  constructor(private  modelService: NgbModal) { }

  ngOnInit() {
  }

  open (content) {
    this.myModal = this.modelService.open(content);

    this.myModal.result.then(({name, url}) => {
      // debugger;
      this.newMovies.next(new MovieModel(name, url));
    })
  }

  ok({valid, value}) {
    if (valid) {
      this.myModal.close(value);
    } else {
      console.warn('form invalid')
    }
  }
}
