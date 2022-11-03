import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

interface GuessesCount {
  count: number
}

@Injectable()
export class GuessesService {

  readonly API = environment.api;

  constructor(private http: HttpClient) { }

  getGuessesCount(): Observable<number>{
    const url = `${this.API}/guesses/count`

    return this.http.get<GuessesCount>(url)
      .pipe(
        map(res => res.count)
      )
  }

}
