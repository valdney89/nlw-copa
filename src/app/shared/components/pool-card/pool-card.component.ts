import { Component, Input } from '@angular/core';
import { Pool } from '@shared/models/pool';

@Component({
  selector: 'app-pool-card',
  templateUrl: './pool-card.component.html',
  styleUrls: ['./pool-card.component.scss']
})
export class PoolCardComponent {
  @Input() pool!: Pool;
}
