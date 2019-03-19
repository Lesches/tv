import { Injectable } from '@angular/core';
import { Tv } from '../tv';
import {Observable, of} from 'rxjs';
import {Address} from '../address';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  tvs: Tv[];
  address: Address[];
  constructor() {
    // TODO: Replace with API call
    this.tvs = [
      new Tv({
        name: 'Mottel\'s Kitchen',
          location: new Address({
            streetNumber: 4937,
            streetName: 'Plamondon'
          }),
        phone: '(514) 555-2019',
        website: 'https://www.teamviral.com',
        rating: 5,
        avgMealPrice: 20
      }),
      new Tv({
        name: 'Tav Cafe',

        location: new Address({
         streetNumber: 6333,
            apartment: 'B',
           streetName: 'Decarie',
                 city: 'Montreal',
             province: 'QC',
           postalCode: 'H3W 3E1',
              country: 'Canada'
        }),

        phone: '(514) 112-3581',
        website: 'http://cafetav.com/',
        rating: 3,
        avgMealPrice: 15
      }),
      new Tv({
        name: 'Pizza Pita',
        phone: '(514) 234-1111',
        rating: 4,
        avgMealPrice: 18
      }),
      new Tv({
        name: 'Chops',
        website: 'https://www.teamviral.com',
        rating: 5,
        avgMealPrice: 40
      }),
      new Tv({
        name: 'Yakimono',
        phone: '(718) 781-0990',
        website: 'https://www.google.com',
        rating: 5,
        avgMealPrice: 50
      })
    ];
  }

  // region Getters
  getShows(): Observable<Tv[]> {
    return of(this.tvs);
  }
  // endregion
}
