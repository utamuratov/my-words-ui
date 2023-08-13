import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { WordService } from '../../services/word.service';
import { GroupModel } from '../../models/group.model';
import { GroupService } from '../../services/group.service';
import { Observable } from 'rxjs';
import { WordResponse } from '../../models/word.model';
import { ActivatedRoute, Router } from '@angular/router';

type OrderType = 'byDate' | 'byAlphabet';
@Component({
  selector: 'mw-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordListComponent implements OnInit {
  /**
   *
   */
  groupId?: number;

  /**
   *
   */
  showCollapsedGroup = false;

  /**
   *
   */
  $group = inject(GroupService);

  /**
   *
   */
  $word = inject(WordService);

  /**
   *
   */
  group$ = this.$group.groups();

  /**
   *
   */
  word$!: Observable<WordResponse[]>;

  translationsGrouped = [
    {
      when: 'Bugun',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
          saved: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
      ],
    },
    {
      when: 'Kecha',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
  ];

  visibleOrderType = false;
  orderType: OrderType = 'byDate';

  /**
   *
   * @param route
   */
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const groupId = +params['groupId'];
      if (isFinite(groupId)) {
        this.groupId = groupId;
        this.word$ = this.$word.getByGroupId(groupId);
        return;
      }
      this.word$ = this.$word.getAll();
    });
  }

  changeOrderType(orderType: OrderType) {
    // TODO Logic
  }

  /**
   *
   * @param group
   */
  chooseGroup(group: GroupModel) {
    this.router.navigate(['my-words', group.id]);
  }

  /**
   *
   */
  chooseAll() {
    this.groupId = undefined;
    this.router.navigate(['my-words']);
  }
}
