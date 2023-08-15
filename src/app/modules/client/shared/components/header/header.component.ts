import { Location } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';

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

  /**
   *
   */
  @Input()
  routerLinkCustom?: any[];

  constructor(
    // eslint-disable-next-line no-unused-vars
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {}

  back() {
    if (this.routerLinkCustom) {
      this.router.navigate(this.routerLinkCustom);
      return;
    }

    this.location.back();
  }
}
