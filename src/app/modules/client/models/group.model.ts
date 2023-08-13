import { Id } from 'src/app/core/id.model';

export interface GroupModel extends Id {
  name: string;
  userId: number;
}

export interface GroupRequest {
  name: string;
}
