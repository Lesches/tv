import {Component, Input, OnInit} from '@angular/core';
import {Tv} from '../../models/tv';

@Component({
  selector: 'app-rest-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.scss']
})
export class TvCardComponent implements OnInit {
  @Input() tv: Tv;

  constructor() {}

  ngOnInit() {}

}
