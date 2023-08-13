import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { GroupModel } from '../models/group.model';
import { map } from 'rxjs';
import { WordRequest, WordResponse } from '../models/word.model';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  url = 'word';
  constructor(private $base: BaseService) {}

  add(model: WordRequest) {
    return this.$base.post<WordResponse>(`${this.url}`, model);
  }

  getAll() {
    return this.$base
      .get<WordResponse[]>(`${this.url}/user`)
      .pipe(map((w) => w.data));
  }

  getByGroupId(groupId: number) {
    return this.$base
      .get<WordResponse[]>(`${this.url}/group/${groupId}`)
      .pipe(map((w) => w.data));
  }
}
