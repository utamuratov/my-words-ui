import { Id } from 'src/app/core/id.model';

export interface WordResponse extends Id, WordRequest {
  //   for ui
  visible?: boolean;
  saved?: boolean;
}

export interface WordRequest {
  newWord: string;
  translation: string;
  groupId: number;
}
