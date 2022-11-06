import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-pool',
  templateUrl: './new-pool.component.html',
  styleUrls: ['./new-pool.component.scss']
})
export class NewPoolComponent implements OnInit {

  title = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  createPool(): void {}

}
