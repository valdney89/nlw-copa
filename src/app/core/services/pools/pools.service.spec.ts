/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoolsService } from './pools.service';

describe('Service: Pools', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoolsService]
    });
  });

  it('should ...', inject([PoolsService], (service: PoolsService) => {
    expect(service).toBeTruthy();
  }));
});
