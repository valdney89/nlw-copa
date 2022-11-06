import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { MyPoolsModule } from './my-pools/my-pools.module';
import { NewPoolModule } from './new-pool/new-pool.module';
import { PoolDetailsModule } from './pool-details/pool-details.module';
import { PoolsRoutingModule } from './pools-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    PoolsRoutingModule,
    MyPoolsModule,
    NewPoolModule,
    PoolDetailsModule
  ],
})
export class PoolsModule { }
