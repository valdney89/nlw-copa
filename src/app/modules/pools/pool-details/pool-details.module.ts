import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { PoolDetailsComponent } from './pool-details.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PoolDetailsComponent, RankingComponent],
  exports: [PoolDetailsComponent, RankingComponent]
})
export class PoolDetailsModule { }
