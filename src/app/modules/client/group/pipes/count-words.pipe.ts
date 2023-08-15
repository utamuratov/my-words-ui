import { Pipe, PipeTransform } from '@angular/core';
import { GroupModel } from '../../models/group.model';

@Pipe({
  name: 'countWords',
  standalone: true,
})
export class CountWordsPipe implements PipeTransform {
  transform(groups: GroupModel[] | null): any {
    if (groups)
      return groups.reduce(
        (accumulator, current) => accumulator + current.wordsCount,
        0
      );

    return 0;
  }
}
