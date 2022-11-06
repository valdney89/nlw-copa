import { Component, OnInit } from '@angular/core';
import { Pool } from '@shared/models/pool';

@Component({
  selector: 'app-pool-details',
  templateUrl: './pool-details.component.html',
  styleUrls: ['./pool-details.component.scss']
})
export class PoolDetailsComponent implements OnInit {

  pool: Pool = {
    title: 'Example Pool',
    owner: {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      avatarUrl: 'https://github.com/valdney89.png',
    },
    participants: [
      {
        userId: 'cl9zqxsif0000wjxog9ixnwfv',
        poolId: 'cl9zqxsve0003wjxoglsaib88',
        guesses: [
          {
            firstTeamPoints: 2,
            secondTeamPoints: 1,
            createdAt: '2022-11-02T14:40:50.833Z',
            gameId: 'cl9zqxtao0008wjxor9jseicj',
            participantId: 'cl9zqxsve0005wjxo8he48xj8',
            game: {
              date: '2022-11-01T12:00:00.370Z',
              firstTeamCountryCode: 'AR',
              secondTeamCountryCode: 'BR',
            }
          },
        ]
      },
      {
        userId: 'cl9zqxsif0000wjxog9ixnwfv',
        poolId: 'cl9zqxsve0003wjxoglsaib88',
        guesses: [
          {
            firstTeamPoints: 2,
            secondTeamPoints: 1,
            createdAt: '2022-11-02T14:40:50.833Z',
            gameId: 'cl9zqxtao0008wjxor9jseicj',
            participantId: 'cl9zqxsve0005wjxo8he48xj8',
            game: {
              date: '2022-11-01T12:00:00.370Z',
              firstTeamCountryCode: 'AR',
              secondTeamCountryCode: 'BR',
            }
          },
        ]
      },
      {
        userId: 'cl9zqxsif0000wjxog9ixnwfv',
        poolId: 'cl9zqxsve0003wjxoglsaib88',
        guesses: [
          {
            firstTeamPoints: 2,
            secondTeamPoints: 1,
            createdAt: '2022-11-02T14:40:50.833Z',
            gameId: 'cl9zqxtao0008wjxor9jseicj',
            participantId: 'cl9zqxsve0005wjxo8he48xj8',
            game: {
              date: '2022-11-01T12:00:00.370Z',
              firstTeamCountryCode: 'AR',
              secondTeamCountryCode: 'BR',
            }
          },
        ]
      },
      {
        userId: 'cl9zqxsif0000wjxog9ixnwfv',
        poolId: 'cl9zqxsve0003wjxoglsaib88',
        guesses: [
          {
            firstTeamPoints: 2,
            secondTeamPoints: 1,
            createdAt: '2022-11-02T14:40:50.833Z',
            gameId: 'cl9zqxtao0008wjxor9jseicj',
            participantId: 'cl9zqxsve0005wjxo8he48xj8',
            game: {
              date: '2022-11-01T12:00:00.370Z',
              firstTeamCountryCode: 'AR',
              secondTeamCountryCode: 'BR',
            }
          },
        ]
      },
    ],
    ownerId: 'cl9zqxsif0000wjxog9ixnwfv',
    code: 'BOL123',
    createdAt: '2022-11-02T14:40:50.283Z',
  }

  navSelected: 'predictions' | 'ranking' = 'predictions'

  constructor() { }

  ngOnInit() {
  }

}
