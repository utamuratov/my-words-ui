import { Injectable, inject } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { LoginRequest, LoginResponse } from '../models/login.model';
import { RegisterRequest, RegisterResponse } from '../models/register.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  /**
   *
   */
  private $base = inject(BaseService);

  /**
   *
   */
  readonly url = 'authenticate';

  /**
   *
   * @param model
   * @returns
   */
  login(model: LoginRequest) {
    return this.$base.post<LoginResponse>(`${this.url}/login`, model);
  }

  /**
   *
   * @param model
   * @returns
   */
  register(model: RegisterRequest) {
    return this.$base.post<RegisterResponse>(`${this.url}/register`, model);
  }
}
