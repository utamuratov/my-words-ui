import { Location } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'mw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  /**
   *
   */
  @Input()
  title = '';

  constructor(
    // eslint-disable-next-line no-unused-vars
    private location: Location
  ) {}

  ngOnInit(): void {}

  back() {
    this.location.back();
  }
}
