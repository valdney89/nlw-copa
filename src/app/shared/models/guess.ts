import { Game } from "./game";
import { Participant } from "./participant";

export interface Guess {
  firstTeamPoints: number;
  secondTeamPoints: number;
  createdAt?: string;
  gameId: string;
  participantId: string;
  participant?: Participant;
  game?: Game;
}
