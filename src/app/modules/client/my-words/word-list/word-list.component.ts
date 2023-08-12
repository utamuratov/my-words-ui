import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

type OrderType = 'byDate' | 'byAlphabet';
@Component({
  selector: 'mw-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordListComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}

  changeOrderType(orderType: OrderType) {
    // TODO Logic
  }
}
