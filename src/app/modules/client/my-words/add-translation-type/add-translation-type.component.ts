import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mw-add-translation-type',
  templateUrl: './add-translation-type.component.html',
  styleUrls: ['./add-translation-type.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTranslationTypeComponent implements OnInit {
  isVisible = false;
  constructor() {}

  ngOnInit(): void {}

  handleCancel() {
    this.close();
  }

  handleOk() {
    this.close();
  }

  close() {
    this.isVisible = false;
  }
}
