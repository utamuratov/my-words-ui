import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { WordService } from '../services/word.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from '../shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { GroupModel } from '../models/group.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GroupService } from '../services/group.service';
import { markAsDirty } from 'src/app/core/utilit';
import { Observable } from 'rxjs';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { RouterLink } from '@angular/router';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CountWordsPipe } from './pipes/count-words.pipe';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    RouterLink,
    ReactiveFormsModule,
    SharedModule,
    CountWordsPipe,

    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzPopconfirmModule,
    NzToolTipModule,
  ],
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent {
  /**
   *
   */
  $group = inject(GroupService);

  /**
   *
   */
  fb = inject(FormBuilder);

  /**
   *
   */
  visibleModal = false;

  /**
   *
   */
  editingGroup?: GroupModel;

  /**
   *
   */
  group$!: Observable<GroupModel[]>;

  /**
   *
   */
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
  });

  /**
   *
   */
  getGroups() {
    this.group$ = this.$group.groups();
  }

  /**
   *
   */
  constructor(private cd: ChangeDetectorRef) {
    this.getGroups();
  }

  closeModal() {
    this.visibleModal = false;
  }

  showModal() {
    this.visibleModal = true;
  }

  edit(group: GroupModel) {
    this.editingGroup = group;
    this.form.controls.name.setValue(group.name);
    this.showModal();
  }

  add() {
    this.showModal();
  }

  delete(id: number) {
    this.$group.delete(id).subscribe((w) => {
      if (w.status) {
        this.getGroups();
        this.closeModal();
        this.cd.markForCheck();
      }
    });
  }

  submit() {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }

    const model = this.form.getRawValue();
    if (this.editingGroup) {
      this.$group.edit(model, this.editingGroup.id).subscribe((w) => {
        if (w.status) {
          this.closeModal();
          this.editingGroup = undefined;
          this.form.reset();
          this.getGroups();
        }
      });
      return;
    }

    this.$group.add(model).subscribe((w) => {
      if (w.status) {
        this.closeModal();
        this.form.reset();
        this.getGroups();
      }
    });
  }
}
