/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuessesService } from './guesses.service';

describe('Service: Guesses', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuessesService]
    });
  });

  it('should ...', inject([GuessesService], (service: GuessesService) => {
    expect(service).toBeTruthy();
  }));
});
