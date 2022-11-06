import { Guess } from './guess';

export interface Participant {
  userId: string;
  poolId: string;
  guesses: Guess[];
}
