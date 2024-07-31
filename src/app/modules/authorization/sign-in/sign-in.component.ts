import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Constants } from 'src/app/core/constants';
import { Router } from '@angular/router';
import { addPrefixToPhoneNumber, markAsDirty } from 'src/app/core/utilit';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
})
export class SignInComponent implements OnInit {
  /**
   *
   */
  form = this.fb.nonNullable.group({
    phoneNumber: ['', [Validators.required]],
    password: ['', [Validators.required]],
    // remember: [true],
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
    private cdr: ChangeDetectorRef
  ) {}

  submitForm(): void {
    if (this.form.valid) {
      this.loading = true;
      const requestModel = this.form.getRawValue();
      addPrefixToPhoneNumber(requestModel);
      this.$auth.login(requestModel).subscribe((w) => {
        this.cdr.markForCheck();
        this.loading = false;

        if (w.status) {
          localStorage.setItem(Constants.ACCESS_TOKEN, w.data.token);
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Telefon nomer yoki parol noto`g`ri';
        }
      });
    } else {
      markAsDirty(this.form);
    }
  }

  ngOnInit(): void {}
}
