import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PoolsService } from '@core/services/pools/pools.service';
import { GuessesService } from '@core/services/guesses/guesses.service';
import { UsersService } from '@core/services/users/users.service';
import { Pool } from '@shared/models/pool';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  title = new FormControl('');

  poolsCount$: Observable<number> = this.getPoolsCount();
  guessesCount$: Observable<number> = this.getGuessesCount();
  usersCount$: Observable<number> = this.getUsersCount();

  constructor(
    private poolsService: PoolsService,
    private guessesService: GuessesService,
    private usersService: UsersService
  ) { }

  ngOnInit() {}

  getPoolsCount(): Observable<number>{
    return this.poolsService.getPoolsCount()
  }

  getGuessesCount(): Observable<number>{
    return this.guessesService.getGuessesCount()
  }

  getUsersCount(): Observable<number>{
    return this.usersService.getUsersCount()
  }

  handleSubmit(): void {
    if(this.title.valid){
      this.createPool();
    }
  }

  private createPool(): void {
    this.poolsService.createPool({ title: this.title.value } as Pool).subscribe({
      next: res => {
        console.log(`Pool generated with the code ${res.code}`);
        this.title.reset();
      },
      error: err => console.log(err)
    })
  }

}
