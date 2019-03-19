import { Component, OnInit } from '@angular/core';
import {Tv} from '../../models/tv';
import {TvService} from '../../models/services/tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  rests: Tv[];
  constructor(private tvService: TvService) { }

  ngOnInit() {
    this.getShows();
  }

  getShows(): void {
    this.tvService.getShows()
      .subscribe(restaurants => this.rests = restaurants);
  }

}
