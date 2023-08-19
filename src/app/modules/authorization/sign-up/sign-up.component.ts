import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Observable, Observer } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { addPrefixToPhoneNumber, markAsDirty } from 'src/app/core/utilit';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent implements OnInit {
  /**
   *
   * @param control
   * @returns
   */
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.form.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  /**
   *
   */
  form = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirm: ['', [this.confirmValidator]],
  });

  /**
   *
   */
  loading = false;

  /**
   *
   */
  errorMessage?: string;

  constructor(
    private fb: FormBuilder,
    private $auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submitForm(): void {
    this.errorMessage = undefined;

    if (this.form.valid) {
      this.loading = true;
      const requestModel = this.form.getRawValue();
      addPrefixToPhoneNumber(requestModel);
      this.$auth.register(requestModel).subscribe((w) => {
        this.loading = false;

        if (w.status) {
          this.router.navigate(['../sign-in'], { relativeTo: this.route });
        } else {
          if (typeof w.error === 'string') this.errorMessage = w.error;
        }
      });
    } else {
      markAsDirty(this.form);
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.form.controls['confirm'].updateValueAndValidity());
  }
}
