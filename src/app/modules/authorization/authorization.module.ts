import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  declarations: [AuthorizationComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,

    ReactiveFormsModule,
    NgxMaskDirective,

    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzGridModule,
    NzSelectModule,
    NzLayoutModule,
    NzAlertModule,
  ],
  providers: [provideNgxMask()],
})
export class AuthorizationModule {}
