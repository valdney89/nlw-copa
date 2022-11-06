import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pool } from '@shared/models/pool';

@Component({
  selector: 'app-my-pools',
  templateUrl: './my-pools.component.html',
  styleUrls: ['./my-pools.component.scss']
})
export class MyPoolsComponent implements OnInit {

  code = new FormControl('');

  pools: Pool[] = [
    {
      title: 'Example Pool',
      owner: {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        avatarUrl: 'https://github.com/valdney89.png',
      },
      ownerId: 'cl9zqxsif0000wjxog9ixnwfv',
      code: 'BOL123',
      createdAt: '2022-11-02T14:40:50.283Z',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  findPool(): void {}

}
