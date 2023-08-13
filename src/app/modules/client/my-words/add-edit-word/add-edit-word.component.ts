import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GroupService } from '../../services/group.service';
import { WordService } from '../../services/word.service';
import { markAsDirty } from 'src/app/core/utilit';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'mw-add-edit-word',
  templateUrl: './add-edit-word.component.html',
  styleUrls: ['./add-edit-word.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditWordComponent implements OnInit {
  /**
   *
   */
  fb = inject(FormBuilder);

  /**
   *
   */
  $word = inject(WordService);

  /**
   *
   */
  group$ = inject(GroupService).groups();

  /**
   *
   */
  groupId = +this.route.snapshot.params['groupId'];

  /**
   *
   */
  form = this.fb.nonNullable.group({
    newWord: ['', [Validators.required]],
    translation: ['', [Validators.required]],
    groupId: [this.groupId, [Validators.required]],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }

    const request = this.form.getRawValue();
    this.$word.add(request).subscribe((w) => {
      if (w.status) {
        this.location.back();
      }
    });
  }
}
