import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { GroupModel, GroupRequest } from '../models/group.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  url = 'group';

  constructor(private $base: BaseService) {}

  add(model: GroupRequest) {
    return this.$base.post<GroupModel>(this.url, model);
  }

  edit(model: GroupRequest, id: number) {
    return this.$base.put<GroupModel>(this.url + '/' + id, model);
  }

  delete(id: number) {
    return this.$base.delete(this.url + '/' + id);
  }

  groups() {
    return this.$base
      .get<GroupModel[]>('group/user')
      .pipe(map((result) => result.data));
  }
}
