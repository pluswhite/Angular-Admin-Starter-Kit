import { Injectable } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class SettingsService {

  constructor(
    private _tokenService: Angular2TokenService
  ) { }

  getProfile() {
    return this._tokenService.validateToken();
  }

  changePassword(data) {
    return this._tokenService.updatePassword({
      password: data.newPassword,
      passwordConfirmation: data.confirmPassword,
      passwordCurrent: data.currentPassword,
      resetPasswordToken: 'resetPasswordToken'
    });
  }
}
