import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

interface UsersCount {
  count: number
}

@Injectable()
export class UsersService {

  readonly API = environment.api;

  constructor(private http: HttpClient) { }

  getUsersCount(): Observable<number>{
    const url = `${this.API}/users/count`

    return this.http.get<UsersCount>(url)
      .pipe(
        map(res => res.count)
      )
  }

}
