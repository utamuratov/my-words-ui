import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { WordService } from '../../services/word.service';
import { GroupModel } from '../../models/group.model';
import { GroupService } from '../../services/group.service';
import { Observable, map } from 'rxjs';
import { WordResponse } from '../../models/word.model';
import { ActivatedRoute, Router } from '@angular/router';

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
  filteredWord$!: Observable<WordResponse[]>;
  private _word$!: Observable<WordResponse[]>;
  private get word$(): Observable<WordResponse[]> {
    return this._word$;
  }
  private set word$(v: Observable<WordResponse[]>) {
    this._word$ = v;
    this.search(this.searchText);
  }

  /**
   *
   */
  searchText = '';

  /**
   *
   */
  visible = false;

  /**
   *
   */
  ordered = false;

  /**
   *
   */
  saved = false;

  /**
   *
   * @param route
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const groupId = +params['groupId'];
      this.searchText = '';
      this.visible = false;
      this.ordered = false;

      if (isFinite(groupId)) {
        this.groupId = groupId;
        this.word$ = this.$word.getByGroupId(groupId);
        return;
      }
      this.word$ = this.$word.getAll();
    });
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

  /**
   *
   * @param searchText
   */
  search(searchText: string) {
    this.searchText = searchText;
    this.filteredWord$ = this.word$.pipe(
      map((words) =>
        words.filter(
          (w) =>
            w.newWord
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase()) ||
            w.translation
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase())
        )
      )
    );
  }

  /**
   *
   */
  clearSearch() {
    this.search('');
  }

  /**
   *
   * @param word
   * @param words
   */
  toggleCollapse(word: WordResponse, words: WordResponse[]) {
    word.visible = !word.visible;
    if (word.visible) {
      if (!words.find((w) => !w.visible)) this.visible = true;
    } else {
      if (!words.find((w) => w.visible)) this.visible = false;
    }
  }

  /**
   *
   */
  toggleVisibility() {
    this.visible = !this.visible;
    this.filteredWord$ = this.filteredWord$.pipe(
      map((words) =>
        words.map((w) => {
          w.visible = this.visible;
          return w;
        })
      )
    );
  }

  /**
   *
   * @returns
   */
  sort() {
    this.ordered = !this.ordered;
    if (this.ordered) {
      this.filteredWord$ = this.filteredWord$.pipe(
        map((words) => words.sort((a, b) => a.newWord.localeCompare(b.newWord)))
      );
      return;
    }

    this.search(this.searchText);
  }

  /**
   *
   * @returns
   */
  filterSavedWords() {
    this.saved = !this.saved;

    if (this.saved) {
      this.filteredWord$ = this.filteredWord$.pipe(
        map((words) => words.filter((w) => w.isSaved))
      );
      return;
    }

    this.search(this.searchText);
  }

  /**
   *
   * @param id
   */
  edit(id: number) {
    this.router.navigate(['my-words', 'edit', id]);
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.$word.delete(id).subscribe((w) => {
      if (w.status) {
        this.word$ = this.word$.pipe(
          map((words) => words.filter((w) => w.id !== id))
        );
        this.cd.markForCheck();
      }
    });
  }

  /**
   *
   * @param word
   * @param e
   */
  toggleIsSaved(word: WordResponse, e: Event) {
    this.$word.toggleIsSaved(word.id).subscribe((w) => {
      this.cd.markForCheck();
      word.isSaved = !word.isSaved;
    });
    e.stopPropagation();
  }
}
