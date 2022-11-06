import { Participant } from "./participant";
import { Pool } from "./pool";

export interface User {
  name: string;
  email: string;
  avatarUrl?: string;
  participatingAt?: Participant[];
  ownPools?: Pool[];
}
