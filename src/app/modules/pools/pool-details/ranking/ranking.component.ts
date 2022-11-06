import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  ranking = [
    {
      name: 'pessoa 01',
      points: 40,
    },
    {
      name: 'pessoa 02',
      points: 30,
    },
    {
      name: 'pessoa 05',
      points: 20,
    },
    {
      name: 'pessoa 03',
      points: 80,
    },
    {
      name: 'pessoa 04',
      points: 10,
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
