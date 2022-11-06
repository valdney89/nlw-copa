import { Guess } from "./guess";

export interface Game {
  date: string;
  firstTeamCountryCode: string;
  secondTeamCountryCode: string;
  guesses?: Guess[]
}
