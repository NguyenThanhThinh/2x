import { Injectable } from '@angular/core';
import {Hero} from '../app/hero';
import {HEROES} from'../app/data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
