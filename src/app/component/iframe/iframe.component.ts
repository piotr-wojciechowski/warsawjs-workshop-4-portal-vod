import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {
  @Input() url: any;

  constructor(private  sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
