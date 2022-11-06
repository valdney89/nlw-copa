import { PoolDetailsComponent } from './pool-details/pool-details.component';
import { NewPoolComponent } from './new-pool/new-pool.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyPoolsComponent } from './my-pools/my-pools.component';

const routes: Routes = [
  {
    path: '',
    component: MyPoolsComponent,
  },
  {
    path: 'new-pool',
    component: NewPoolComponent,
  },
  {
    path: 'pool-details',
    component: PoolDetailsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PoolsRoutingModule { }
