import { Participant } from './participant';
import { User } from "./user";

export interface Pool {
  title: string;
  owner?: User;
  ownerId?: string;
  participants?: Participant[];
  code?: string;
  createdAt?: string;
}
