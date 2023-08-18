import { Id } from 'src/app/core/id.model';

export interface WordResponse extends Id, WordRequest {
  isSaved: boolean | null;

  //   for ui
  visible?: boolean;
}

export interface WordRequest {
  newWord: string;
  translation: string;
  groupId: number;
}
