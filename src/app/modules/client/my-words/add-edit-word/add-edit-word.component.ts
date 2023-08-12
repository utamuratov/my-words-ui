import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mw-add-edit-word',
  templateUrl: './add-edit-word.component.html',
  styleUrls: ['./add-edit-word.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditWordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
