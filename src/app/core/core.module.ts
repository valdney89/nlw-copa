import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GuessesService } from './services/guesses/guesses.service';
import { PoolsService } from './services/pools/pools.service';
import { UsersService } from './services/users/users.service';

@NgModule({
  imports: [CommonModule],
  providers: [PoolsService, GuessesService, UsersService],
})
export class CoreModule {}
