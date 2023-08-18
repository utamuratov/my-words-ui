import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/modules/authorization/service/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NzButtonModule, NzPopoverModule, NzIconModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  $auth = inject(AuthService);
  visible = false;

  logout() {
    this.$auth.logout();
  }

  close() {
    this.visible = false;
  }
}
