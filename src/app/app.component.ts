import { Component, OnInit } from '@angular/core';
import { PoolsService } from '@core/services/pools/pools.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private poolsService: PoolsService){}

  title = 'NLW COPA';

  ngOnInit(): void {
    this.poolsService.getPoolsCount().subscribe(
      res => console.log(res)
    )
  }
}
