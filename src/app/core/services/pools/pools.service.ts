import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { Pool } from '@shared/models/pool';

interface PoolsCount {
  count: number
}

@Injectable()
export class PoolsService {

  readonly API = environment.api;

  constructor(private http: HttpClient) { }

  getPoolsCount(): Observable<number>{
    const url = `${this.API}/pools/count`;

    return this.http.get<PoolsCount>(url)
      .pipe(
        map(res => res.count)
      )
  }

  createPool(pool: Pool): Observable<Pool>{
    console.log(pool)
    const url = `${this.API}/pools`;

    return this.http.post<Pool>(url, pool);
  }

}
